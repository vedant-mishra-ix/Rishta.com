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
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IRegistrationService RegistrationService;
        private readonly IWebHostEnvironment WebHostEnvironment;
        public RegistrationController(IRegistrationService _RegistrationService, IWebHostEnvironment _webHostEnvironment)
        {
            RegistrationService = _RegistrationService;
            WebHostEnvironment = _webHostEnvironment;
        }
        [HttpPost]
        public IActionResult Registration([FromForm] Registration obj)
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
                RegistrationService.Registration(obj);
                return Ok(RegistrationService.Registration(obj));
            }
            catch (Exception ex)
            {
                return BadRequest(ex+"Something wrong");
            }
        }
    }
}
