
using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Service;

namespace RishtaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ICityService CityService;
        public CityController(ICityService _CityService)
        {
            CityService = _CityService;
        }
        [HttpGet]
        public IActionResult Cities()
        {
            return Ok(CityService.Cities());
        }
    }
}
