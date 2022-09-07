using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;

using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Model;
using RishtaAPI.Service;
using System;

using System.IO;
using System.Threading.Tasks;

namespace RishtaAPI.Controllers
{
    [Authorize(Roles =UserRoles.Users)]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IRegistrationService RegistrationService;
        private readonly IReportProfileService ReportProfileService;
        private readonly IWebHostEnvironment WebHostEnvironment;
        public UserController(IRegistrationService _RegistrationService, IWebHostEnvironment _WebHostEnvironment,
            IReportProfileService _ReportProfileService
            )
        {
            RegistrationService = _RegistrationService;
            WebHostEnvironment = _WebHostEnvironment;
            ReportProfileService = _ReportProfileService;
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
        [HttpGet]
        [Route("Gender")]
        public IActionResult Registrations(string Sex)
        {
            return Ok(RegistrationService.RegistrationGenderBased(Sex));
        }
        [HttpGet]
        [Route("Martial")]
        public IActionResult RegistrationsMartialStatus(string MartialStatus)
        {
            return Ok(RegistrationService.RegistrationGenderMartialStatus(MartialStatus));
        }
        [HttpGet]
        [Route("FamilyType")]
        public IActionResult RegistrationsFamilyType(string FamilyType)
        {
            return Ok(RegistrationService.RegistrationGenderFamilyType(FamilyType));
        }
        [HttpPost]
        [Route("ReportProfile")]
        public async Task<IActionResult> ReportProfiles( int Id)
        {
            try
            {
                var test = await ReportProfileService.ReportProfile(Id);
                return Ok(test);
            }
            catch (Exception ex)
            {

                throw;
           }
        }

    }
}
