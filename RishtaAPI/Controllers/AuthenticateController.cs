
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
        private readonly IRegistrationService _RegistrationService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration _configuration;
        private readonly RoleManager<IdentityRole> _RoleManager;

        public AuthenticateController(UserManager<ApplicationUser> userManager, IConfiguration configuration,
            IRegistrationService RegistrationService, IWebHostEnvironment webHostEnvironment, RoleManager<IdentityRole> RoleManager)
        {
            _userManager = userManager;
            _configuration = configuration;
            _RegistrationService = RegistrationService;
            _WebHostEnvironment = webHostEnvironment;
            _RoleManager = RoleManager;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);

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
            var userExists = await _userManager.FindByNameAsync(model.UserName);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError,new Response { Status="Error",Message="User Already Exist!"});

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

            await _RoleManager.CreateAsync(idetityrole);

            try
            {
                if (!Directory.Exists(_WebHostEnvironment.WebRootPath + "\\images\\"))
                {
                    Directory.CreateDirectory(_WebHostEnvironment.WebRootPath + "\\images\\");
                }
                using (FileStream fileStream = System.IO.File.Create(_WebHostEnvironment.WebRootPath + "\\images\\" + model.Files.FileName))
                {
                    model.Files.CopyTo(fileStream);
                    fileStream.Flush();
                    var filepath = "\\images\\" + model.Files.FileName;
                    model.ProfilePhoto = filepath;
                }
                var result = await _userManager.CreateAsync(user, model.Password);
                if (!await _RoleManager.RoleExistsAsync(UserRoles.Admin))
                    await _RoleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
                if (!await _RoleManager.RoleExistsAsync(UserRoles.Users))
                    await _RoleManager.CreateAsync(new IdentityRole(UserRoles.Users));
                if (await _RoleManager.RoleExistsAsync(UserRoles.Admin))
                    await _userManager.AddToRoleAsync(user, UserRoles.Users);
                return Ok(_RegistrationService.Registration(model));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,new Response { Status="Error",Message="Internal server Error"});
            }  
          
        }

        [HttpPost]
        [Route("RegisterAdmin")]
        public async Task<IActionResult> RegisterAdmin([FromForm] Registration model)
        {
            var userExists = await _userManager.FindByNameAsync(model.UserName);
            //if (userExists != null)
            //    return StatusCode(StatusCodes.Status500InternalServerError);

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName
            };
            try
            {
                if (!Directory.Exists(_WebHostEnvironment.WebRootPath + "\\images\\"))
                {
                    Directory.CreateDirectory(_WebHostEnvironment.WebRootPath + "\\images\\");
                }
                using (FileStream fileStream = System.IO.File.Create(_WebHostEnvironment.WebRootPath + "\\images\\" + model.Files.FileName))
                {
                    model.Files.CopyTo(fileStream);
                    fileStream.Flush();
                    var filepath = "\\images\\" + model.Files.FileName;
                    model.ProfilePhoto = filepath;
                }
                await _RegistrationService.Registration(model);
                var result = await _userManager.CreateAsync(user, model.Password);
                if (!await _RoleManager.RoleExistsAsync(UserRoles.Admin))
                    await _RoleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
                if (!await _RoleManager.RoleExistsAsync(UserRoles.Users))
                    await _RoleManager.CreateAsync(new IdentityRole(UserRoles.Users));
                if (await _RoleManager.RoleExistsAsync(UserRoles.Admin))
                    await _userManager.AddToRoleAsync(user, UserRoles.Admin);
                return Ok(_RegistrationService.Registration(model));
            }
            catch (Exception ex)
            {
                return BadRequest(ex + "Something wrong");
            }


        }

    }
}