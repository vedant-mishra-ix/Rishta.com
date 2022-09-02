using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Model;
using RishtaAPI.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Controllers
{
    [Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IRegistrationService RegistrationService;
        public AdminController(IRegistrationService _RegistrationService)
        {
            RegistrationService = _RegistrationService;
        }
        [HttpGet]
        public IActionResult Registrations()
        {
            return Ok(RegistrationService.Registrations());
        }
        [HttpDelete]
        public IActionResult Registration(int Id)
        {
            return Ok(RegistrationService.Registration(Id));
        }
    }
}
