using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
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
        private readonly IRegistrationService _RegistrationService;
        private readonly IReportProfileService _ReportProfileService;
        private readonly IRequestProfileService _RequestProfileService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public UserController(IRegistrationService RegistrationService, IWebHostEnvironment WebHostEnvironment,
            IReportProfileService ReportProfileService, IRequestProfileService RequestProfileService
            )
        {
            _RegistrationService = RegistrationService;
            _WebHostEnvironment = WebHostEnvironment;
            _ReportProfileService = ReportProfileService;
            _RequestProfileService = RequestProfileService;
        }
        [HttpGet]
        public IActionResult Registrations(int Id)
        {
            try
            {
                return Ok(_RegistrationService.Registrations(Id));
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest,new Response { Status="Error",Message="Id didn't found"});
            }
        }
        [HttpPut]
        public IActionResult Registration([FromForm]Model.Update obj)
        {
            try
            {
                if (!Directory.Exists(_WebHostEnvironment.WebRootPath + "\\images\\"))
                {
                    Directory.CreateDirectory(_WebHostEnvironment.WebRootPath + "\\images\\");
                }
                using (FileStream fileStream = System.IO.File.Create(_WebHostEnvironment.WebRootPath + "\\images\\" + obj.Files.FileName))
                {
                    obj.Files.CopyTo(fileStream);
                    fileStream.Flush();
                    var filepath = "\\images\\" + obj.Files.FileName;
                    obj.ProfilePhoto = filepath;
                }
                return Ok(_RegistrationService.RegistrationUpdate(obj));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest,new Response { Status="Error",Message="Image not uploaded"});
            }
        }
        [HttpGet]
        [Route("profile")]
        public IActionResult Regsistrations(string Username)
        {
            try
            {
                return Ok(_RegistrationService.Registrationuser(Username));
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest,new Response { Status="Error",Message="User didn't matched"});
            }
        }
        [HttpGet]
        [Route("Gender")]
        public IActionResult Registrations(string Sex)
        {
            try
            {
                return Ok(_RegistrationService.RegistrationGenderBased(Sex));
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound,new Response { Status="Error",Message="Gender didn't found"});
            }
        }
        [HttpGet]
        [Route("Martial")]
        public IActionResult RegistrationsMartialStatus(string MartialStatus)
        {
            try
            {
                return Ok(_RegistrationService.RegistrationGenderMartialStatus(MartialStatus));
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound,new Response { Status="Error",Message="MartialStatus didn't found"});
            }
        }
        [HttpGet]
        [Route("FamilyType")]
        public IActionResult RegistrationsFamilyType(string FamilyType)
        {
            try
            {
                return Ok(_RegistrationService.RegistrationGenderFamilyType(FamilyType));
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound,new Response { Status="Error",Message="FamilyType didn't found"});
            }
        }
        [HttpPost]
        [Route("ReportProfile")]
        public async Task<IActionResult> ReportProfiles( int Id)
        {
            try
            {
                var test = await _ReportProfileService.ReportProfile(Id);
                return Ok(test);
            }
            catch (Exception)
            {

                return StatusCode(StatusCodes.Status204NoContent,new Response { Status="Error",Message="Internal server error"});
           }
        }
        [HttpPost]
        [Route("RequestProfile")]
        public async Task<IActionResult> RequestProfile(RequestSend request)
        {
            try
            {
                var AddRequestData = await _RequestProfileService.RequestProfiles(request);
                return Ok(AddRequestData);
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status204NoContent,new Response { Status="Error",Message=" No content found"});
            }
        }
        [HttpGet]
        [Route("RequestProfiles")]
        public  IActionResult RequestProfiles(int Id)
        {
            try
            {
                var GetRequestData =  _RequestProfileService.RequestProfiles(Id);
                return Ok(GetRequestData);
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest,new Response { Status="Error",Message="Id didn't matched"});
            }
        }
        [HttpGet]
        [Route("RequestProfileHistory")]
        public IActionResult RequestProfileHistory(int Id)
        {
            try
            {
                var RequestHistory = _RequestProfileService.RequestProfileHistory(Id);
                return Ok(RequestHistory);
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest,new Response { Status="Error",Message="Id didn't matched"});
            }
        }

    }
}
