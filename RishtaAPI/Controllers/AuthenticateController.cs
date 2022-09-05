
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using RishtaAPI.Authentication;
using RishtaAPI.Model;
using RishtaAPI.Service;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace JWTAuthenticationWithSwagger.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly IRegistrationService RegistrationService;
        private readonly IWebHostEnvironment WebHostEnvironment;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IConfiguration _configuration;
        private readonly RoleManager<IdentityRole> RoleManager;

        public AuthenticateController(UserManager<ApplicationUser> userManager, IConfiguration configuration,
            IRegistrationService _RegistrationService, IWebHostEnvironment _webHostEnvironment, RoleManager<IdentityRole> _RoleManager)
        {
            this.userManager = userManager;
            _configuration = configuration;
            RegistrationService = _RegistrationService;
            WebHostEnvironment = _webHostEnvironment;
            RoleManager = _RoleManager;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            var user = await userManager.FindByNameAsync(model.UserName);
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo,
                    role = userRoles[0]
                });
            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromForm] Registration model)
        {
            var userExists = await userManager.FindByNameAsync(model.UserName);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError);

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName
            };

            IdentityRole idetityrole = new IdentityRole
            {
                Name = "user"
            };

            await RoleManager.CreateAsync(idetityrole);

            try
            {
                if (!Directory.Exists(WebHostEnvironment.WebRootPath + "\\images\\"))
                {
                    Directory.CreateDirectory(WebHostEnvironment.WebRootPath + "\\images\\");
                }
                using (FileStream fileStream = System.IO.File.Create(WebHostEnvironment.WebRootPath + "\\images\\" + model.Files.FileName))
                {
                    model.Files.CopyTo(fileStream);
                    fileStream.Flush();
                    var filepath = "\\images\\" + model.Files.FileName;
                    model.ProfilePhoto = filepath;
                }
                var result = await userManager.CreateAsync(user, model.Password);
                //  if (!result.Succeeded)
                //return StatusCode(StatusCodes.Status500InternalServerError);

                // return Ok("success");
                if (!await RoleManager.RoleExistsAsync(UserRoles.Admin))
                    await RoleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
                if (!await RoleManager.RoleExistsAsync(UserRoles.Users))
                    await RoleManager.CreateAsync(new IdentityRole(UserRoles.Users));
                if (await RoleManager.RoleExistsAsync(UserRoles.Admin))
                    await userManager.AddToRoleAsync(user, UserRoles.Users);
                return Ok(RegistrationService.Registration(model));
            }
            catch (Exception ex)
            {
                return BadRequest(ex + "Something wrong");
            }  
          
        }

        [HttpPost]
        [Route("RegisterAdmin")]
        public async Task<IActionResult> RegisterAdmin([FromForm] Registration model)
        {
            var userExists = await userManager.FindByNameAsync(model.UserName);
            //if (userExists != null)
            //    return StatusCode(StatusCodes.Status500InternalServerError);

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName
            };

            //IdentityRole idetityRole = new IdentityRole
            //{
            //    Name = "User"
            //};

            //await RoleManager.CreateAsync(idetityRole);

            try
            {
                if (!Directory.Exists(WebHostEnvironment.WebRootPath + "\\images\\"))
                {
                    Directory.CreateDirectory(WebHostEnvironment.WebRootPath + "\\images\\");
                }
                using (FileStream fileStream = System.IO.File.Create(WebHostEnvironment.WebRootPath + "\\images\\" + model.Files.FileName))
                {
                    model.Files.CopyTo(fileStream);
                    fileStream.Flush();
                    var filepath = "\\images\\" + model.Files.FileName;
                    model.ProfilePhoto = filepath;
                }
                await RegistrationService.Registration(model);
                var result = await userManager.CreateAsync(user, model.Password);
                //  if (!result.Succeeded)
                //return StatusCode(StatusCodes.Status500InternalServerError);

                // return Ok("success");
                if (!await RoleManager.RoleExistsAsync(UserRoles.Admin))
                    await RoleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
                if (!await RoleManager.RoleExistsAsync(UserRoles.Users))
                    await RoleManager.CreateAsync(new IdentityRole(UserRoles.Users));
                if (await RoleManager.RoleExistsAsync(UserRoles.Admin))
                    await userManager.AddToRoleAsync(user, UserRoles.Admin);
                return Ok(RegistrationService.Registration(model));
            }
            catch (Exception ex)
            {
                return BadRequest(ex + "Something wrong");
            }


        }

    }
}