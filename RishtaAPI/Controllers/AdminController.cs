using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Model;
using RishtaAPI.Service;
using System;

namespace RishtaAPI.Controllers
{
    [Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IRegistrationService _RegistrationService;
        private readonly IReportProfileService _ReportProfileService;
        public AdminController(IRegistrationService RegistrationService, IReportProfileService ReportProfileService)
        {
            _RegistrationService = RegistrationService;
            _ReportProfileService = ReportProfileService;
        }
        [HttpGet]
        [Route("Registered")]

        public IActionResult Registrations()
        {
            try
            {
                return Ok(_RegistrationService.Registrations());
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,new Response { Status="Error",Message="Internal Server Error"});
            }
        }

        [HttpGet]
        public IActionResult Registrations(int Id)
        {
            try
            {
                return Ok(_RegistrationService.Registrations(Id));
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest,new Response { Status="Error",Message="Id didn't found"});
            }
        }
        [HttpDelete("{Id}")]
        public IActionResult Registration(int Id)
        {
            try
            {
                return Ok(_RegistrationService.Registration(Id));
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest,new Response { Status="Error",Message="Id didn't matched"});
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
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,new Response {Status="Error",Message="User not found"});
            }
        }
        [HttpGet]
        [Route("ReportedProfileData")]
        public  IActionResult ReportedProfilesData()
        {
            try
            {
                return Ok(_ReportProfileService.ReportProfiles());
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,new Response { Status="Error",Message="Internal server error"});
            }
        }
    }
}
