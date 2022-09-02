//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using RishtaAPI.Data;
//using RishtaAPI.Model;
//using RishtaAPI.Service;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace RishtaAPI.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class LoginController : ControllerBase
//    {
//        private readonly CoreDbContext CoreDb;
//        private readonly IRegistrationService RegistrationService;
//        public LoginController(IRegistrationService _RegistrationService, CoreDbContext _CoreDb)
//        {
//            RegistrationService = _RegistrationService;
//            CoreDb = _CoreDb;
//        }
//        [HttpPost]
//        public IActionResult Login(Login LoginObj)
//        {
//            var LoginDetails = RegistrationService.Registrations().FirstOrDefault(obj => obj.UserName == LoginObj.UserName && obj.Password == LoginObj.Password);
//            if(LoginDetails != null)
//            {
//                return Ok(LoginDetails);
//            }
//            else
//            {
//                return BadRequest("Details didn't mathched");
//            }
//        }

//        [HttpPost]
//        public IActionResult Authenticate([FromBody] Login Credentials )
//        {
//            var user = CoreDb.Registration.FirstOrDefault(obj => obj.UserName == Credentials.UserName && obj.Password == Credentials.Password);
//            if(user == null)
//            {
//                return Unauthorized();
//            }
//            return Ok();
//        }
//    }
//}
