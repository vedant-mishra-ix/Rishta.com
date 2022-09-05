using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Model;
using RishtaAPI.Service;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Controllers
{
    [Authorize(Roles =UserRoles.Users)]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IRegistrationService RegistrationService;
        private readonly IWebHostEnvironment WebHostEnvironment;
        public UserController(IRegistrationService _RegistrationService, IWebHostEnvironment _WebHostEnvironment)
        {
            RegistrationService = _RegistrationService;
            WebHostEnvironment = _WebHostEnvironment;
        }
        [HttpGet]
        public IActionResult Registrations(int Id)
        {
            return Ok(RegistrationService.Registrations(Id));
        }
        [HttpPut]
        public IActionResult Registration([FromForm]Model.Update obj)
        {


            try
            {
                if (!Directory.Exists(WebHostEnvironment.WebRootPath + "\\images\\"))
                {
                    Directory.CreateDirectory(WebHostEnvironment.WebRootPath + "\\images\\");
                }
                using (FileStream fileStream = System.IO.File.Create(WebHostEnvironment.WebRootPath + "\\images\\" + obj.Files.FileName))
                {
                    obj.Files.CopyTo(fileStream);
                    fileStream.Flush();
                    var filepath = "\\images\\" + obj.Files.FileName;
                    obj.ProfilePhoto = filepath;
                }
                return Ok(RegistrationService.RegistrationUpdate(obj));
            }
            catch (Exception ex)
            {
                return BadRequest(ex + "Something wrong");
            }
        }
        [HttpGet]
        [Route("profile")]
        public IActionResult Regsistrations(string Username)
        {
            return Ok(RegistrationService.Registrationuser(Username));
        }
        
    }
}
