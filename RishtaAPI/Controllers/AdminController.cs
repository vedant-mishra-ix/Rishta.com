using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Model;
using RishtaAPI.Service;


namespace RishtaAPI.Controllers
{
    [Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IRegistrationService RegistrationService;
        private readonly IReportProfileService ReportProfileService;
        public AdminController(IRegistrationService _RegistrationService, IReportProfileService _ReportProfileService)
        {
            RegistrationService = _RegistrationService;
            ReportProfileService = _ReportProfileService;
        }
        [HttpGet]
        [Route("Registered")]

        public IActionResult Registrations()
        {
            return Ok(RegistrationService.Registrations());
        }

        [HttpGet]
        public IActionResult Registrations(int Id)
        {
            return Ok(RegistrationService.Registrations(Id));
        }
        [HttpDelete("{Id}")]
        public IActionResult Registration(int Id)
        {
            return Ok(RegistrationService.Registration(Id));
        }
        [HttpGet]
        [Route("profile")]
        public IActionResult Regsistrations(string Username)
        {
            return Ok(RegistrationService.Registrationuser(Username));
        }
        [HttpGet]
        [Route("ReportedProfileData")]
        public  IActionResult ReportedProfilesData()
        {
            return Ok(ReportProfileService.ReportProfiles());
        }
    }
}
