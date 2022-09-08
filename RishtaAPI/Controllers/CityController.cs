
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
        private readonly ICityService _CityService;
        public CityController(ICityService CityService)
        {
            _CityService = CityService;
        }
        [HttpGet]
        public IActionResult Cities()
        {
            try
            {
                return Ok(_CityService.Cities());
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound,new Response { Status="Error",Message="Data not found in database"});
            }
        }
    }
}
