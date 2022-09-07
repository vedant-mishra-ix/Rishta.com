
using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Service;

namespace RishtaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StateController : ControllerBase
    {
        private readonly IStateService StateService;
        public StateController(IStateService _StateService)
        {
            StateService = _StateService;
        }
        [HttpGet]
        public IActionResult States()
        {
            return Ok(StateService.States());
        }
    }
}
