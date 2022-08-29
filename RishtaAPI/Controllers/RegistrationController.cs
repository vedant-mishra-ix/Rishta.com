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
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IRegistrationService RegistrationService;
        public RegistrationController(IRegistrationService _RegistrationService)
        {
            RegistrationService = _RegistrationService;
        }
        [HttpPost]
        public IActionResult Registration([FromBody] Registration obj)
        {
            return Ok(RegistrationService.Registration(obj));
        }
    }
}
