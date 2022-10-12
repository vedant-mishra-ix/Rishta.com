using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Model;
using RishtaAPI.Service;
using System;

namespace RishtaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembershipPlansController : ControllerBase
    {
        private readonly IMembership_PlansService _service;
        public MembershipPlansController(IMembership_PlansService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("Membership_Plans")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_service.PlansList());
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,new Response { Status="Error",Message="Internal Server Error"});
            }
        }
    }
}
