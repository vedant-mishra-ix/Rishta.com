using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Authentication;
using RishtaAPI.Model;
using RishtaAPI.Service;
using System;
using System.Threading.Tasks;

namespace RishtaAPI.Controllers
{
    [Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IRegistrationService _RegistrationService;
        private readonly IReportProfileService _ReportProfileService;
        private readonly IMembershipService _MemberShipService;
        private readonly UserManager<ApplicationUser> _userManager;
        public AdminController(IRegistrationService RegistrationService, IReportProfileService ReportProfileService, 
            IMembershipService MemberShipService, UserManager<ApplicationUser> userManager)
        {
            _RegistrationService = RegistrationService;
            _ReportProfileService = ReportProfileService;
            _MemberShipService = MemberShipService;
            _userManager = userManager;
    }
        // for getting all registered records
        [HttpGet]
        [Route("Registered")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_RegistrationService.Registrations());
            }
            catch(Exception )
            {
                return StatusCode(StatusCodes.Status500InternalServerError,new Response { Status="Error",Message="Internal Server Error"});
            }
        }
        // for getting all registered records  admin can also , user can also , membership records also  
        [HttpGet]
        public IActionResult GetById(int  id)
        {
            try
            {
                return Ok(_RegistrationService.Registrations(id));
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound,new Response { Status="Error",Message="Data Not Found"});
            }
        }
        // for deleting the registered accounts
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var data =  _RegistrationService.Registration(id);
                // deleted user from every AspNet tables
                ApplicationUser user = await _userManager.FindByNameAsync(data.UserName); 
                if(user != null)
                {
                    await _userManager.DeleteAsync(user);
                }
                return Ok(data);
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound,new Response { Status="Error",Message="Data Not Found"});
            }
        }
        // for getting Admin records only
        [HttpGet]
        [Route("profile")]
        public IActionResult GetProfile(string userName)
        {
            try
            {
                return Ok(_RegistrationService.Registrations(userName));
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound,new Response {Status="Error",Message="Data Not Found"});
            }
        }
        // for getting  all reported account details
        [HttpGet]
        [Route("ReportedProfileData")]
        public  IActionResult GetReportedProfile()
        {
            try
            {
                return Ok(_ReportProfileService.ReportProfiles());
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,new Response { Status="Error",Message="Internal Server Error"});
            }
        }
        // for getting the Membership Profiles
        [HttpGet]
        [Route("MembersipProfiles")]
        public IActionResult GetMemberShipProfile()
        {
            try
            {
                var MembersProfile = _MemberShipService.MemberShipsProfiles();
                return Ok(MembersProfile);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Internal Server Error" });
            }
        }
        // for deleting membership profiles
        [HttpDelete]
        [Route("MemberShipProfiles/{id}")]
        public IActionResult DeleteById(int id)
        {
            try
            {
                var MembersProfile = _MemberShipService.MemberShip(id);
                return Ok(MembersProfile);
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data Not Found" });
            }
        }
    }
}
