
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Model;
using RishtaAPI.Service;
using System;

namespace RishtaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StateController : ControllerBase
    {
        private readonly IStateService _service;
        public StateController(IStateService service)
        {
            _service = service;
        }
        [HttpGet]
        [Route("States")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_service.States());
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,new Response { Status="Error",Message= "Internal Server Error" });
            }
        }
    }
}
