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
    [Authorize(Roles =UserRoles.Users)]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IRegistrationService RegistrationService;
        public UserController(IRegistrationService _RegistrationService)
        {
            RegistrationService = _RegistrationService;
        }
        [HttpGet]
        public IActionResult Registrations()
        {
            return Ok(RegistrationService.Registrations());
        }
        [HttpPut]
        public IActionResult Registration(Registration obj)
        {
            return Ok(RegistrationService.RegistrationUpdate(obj));
        }
        
    }
}
