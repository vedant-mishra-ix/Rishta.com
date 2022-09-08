
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
        private readonly IStateService _StateService;
        public StateController(IStateService StateService)
        {
            _StateService = StateService;
        }
        [HttpGet]
        public IActionResult States()
        {
            try
            {
                return Ok(_StateService.States());
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound,new Response { Status="Error",Message= "Data not found in database" });
            }
        }
    }
}
