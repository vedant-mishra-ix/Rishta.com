
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Model;
using RishtaAPI.Service;
using System;

namespace RishtaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ICityService _service;
        public CityController(ICityService service)
        {
            _service = service;
        }
        [HttpGet]
        [Route("Cities")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_service.Cities());
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,new Response { Status="Error",Message="Internal Server Error"});
            }
        }
    }
}
