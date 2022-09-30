using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RishtaAPI.Model;
using RishtaAPI.Service;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Controllers
{
    [Authorize(Roles = UserRoles.Users)]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IRegistrationService _RegistrationService;
        private readonly IReportProfileService _ReportProfileService;
        private readonly IRequestProfileService _RequestProfileService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        private readonly IRequestAcceptService _RequestAcceptService;
        private readonly IMembershipService _MemberShipService;
        private readonly IChatsService _ChatsService;
        public UserController(IRegistrationService RegistrationService, IWebHostEnvironment WebHostEnvironment,
            IReportProfileService ReportProfileService, IRequestProfileService RequestProfileService, IRequestAcceptService RequestAcceptService,
            IMembershipService MemberShipService, IChatsService ChatsService
            )
        {
            _RegistrationService = RegistrationService;
            _WebHostEnvironment = WebHostEnvironment;
            _ReportProfileService = ReportProfileService;
            _RequestProfileService = RequestProfileService;
            _RequestAcceptService = RequestAcceptService;
            _MemberShipService = MemberShipService;
            _ChatsService = ChatsService;
        }

        // for getting all registered records
        [HttpGet]
        [Route("Registered")]
        public IActionResult GetAllUser()
        {
            try
            {
                return Ok(_RegistrationService.Registrations());
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Internal Server Error" });
            }
        }
        // for getting all registered accounts insted of his and admin records
        [HttpGet]
        [Route("Registrations")]
        public IActionResult GetAll(int id)
        {
            try
            {
                return Ok(_RegistrationService.Registrations(id));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data Not Found" });
            }
        }
        // for updating the registered records
        [HttpPut]
        [Route("Registration")]
        public IActionResult Update([FromForm] Update updateUser)
        {
            try
            {
                if (!Directory.Exists(_WebHostEnvironment.WebRootPath + "\\images\\"))
                {
                    Directory.CreateDirectory(_WebHostEnvironment.WebRootPath + "\\images\\");
                }
                using (FileStream fileStream = System.IO.File.Create(_WebHostEnvironment.WebRootPath + "\\images\\" + updateUser.Files.FileName))
                {
                    updateUser.Files.CopyTo(fileStream);
                    fileStream.Flush();
                    var filepath = "\\images\\" + updateUser.Files.FileName;
                    updateUser.ProfilePhoto = filepath;
                }
                return Ok(_RegistrationService.RegistrationUpdate(updateUser));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Error", Message = "Image not uploaded" });
            }
        }
        // for getting the user specific records
        [HttpGet]
        [Route("profile")]
        public IActionResult GetAll(string userName)
        {
            try
            {
                return Ok(_RegistrationService.Registrationuser(userName));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data Not Found" });
            }
        }
        // for getting the gender based records
        [HttpGet]
        [Route("Gender")]
        public IActionResult GetAllGender(string sex)
        {
            try
            {
                return Ok(_RegistrationService.RegistrationGenderBased(sex));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data Not Found" });
            }
        }
        // for getting the martial based records
        [HttpGet]
        [Route("Martial")]
        public IActionResult GetAllMartial(string martialStatus)
        {
            try
            {
                return Ok(_RegistrationService.RegistrationGenderMartialStatus(martialStatus));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data Not Found" });
            }
        }
        // for getting the familyType based records
        [HttpGet]
        [Route("RegisteredSpecificProfile")]
        public IActionResult GetAllFamilyType(int id)
        {
            try
            {
                return Ok(_RegistrationService.RegisteredSpecificProfile(id));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data Not Found" });
            }
        }
        // it is used for reporting the profile
        [HttpPost]
        [Route("ReportProfile")]
        public async Task<IActionResult> PostReportProfile(int id)
        {
            try
            {
                var test = await _ReportProfileService.ReportProfile(id);
                return Ok(test);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Error", Message = "Bad Request" });
            }
        }
        // it is used for sending the request 
        [HttpPost]
        [Route("RequestProfile")]
        public async Task<IActionResult> PostRequestProfile(RequestSend request)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    var AddRequestData = await _RequestProfileService.RequestProfiles(request);
                    return Ok(AddRequestData);
                }
                catch (Exception)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Error", Message = "Bad Content Found" });
                }
            }
            else
            {
                return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Validation Error", Message = "Data Is Not Accepted" });
            }
        }
        // it is used for getting the request profiles list
        [HttpGet]
        [Route("RequestProfiles")]
        public IActionResult GetRequestProfiles(int id)
        {
            try
            {
                var GetRequestData = _RequestProfileService.RequestProfiles(id);
                return Ok(GetRequestData);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data Not Found" });
            }
        }
        // for getting the request profile history
        [HttpGet]
        [Route("RequestProfileHistory")]
        public IActionResult GetHistory(int id)
        {
            try
            {
                var RequestHistory = _RequestProfileService.RequestProfileHistory(id);
                return Ok(RequestHistory);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data Not Found" });
            }
        }
        // for accepting the request
        [HttpPost]
        [Route("RequestAccept")]
        public async Task<IActionResult> PostRequestAccept(RequestSend request)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    var AddRequestAccept = await _RequestAcceptService.RequestAccepts(request);
                    return Ok(AddRequestAccept);
                }
                catch (Exception)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Error", Message = "Bad Content Found" });
                }
            }
            else
            {
                return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Validation Error", Message = "Bad Content Found" });
            }
        }
        // for getting Request accept data list
        [HttpGet]
        [Route("RequestAccept")]
        public IActionResult GetRequestAccept(int id)
        {
            try
            {
                var GetRequestData = _RequestAcceptService.RequestAccept(id);
                return Ok(GetRequestData);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data Not Found" });
            }
        }
        // for deleting the request
        [HttpDelete]
        [Route("RequestDelete")]
        public IActionResult DeleteRequest(RequestDelete delete)
        {
            try
            {
                return Ok(_RequestProfileService.RequestProfile(delete));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data not Found" });
            }
        }
        // for taking the membership
        [HttpPost]
        [Route("Membership")]
        public async Task<IActionResult> PostMemberShip(MemberShip members)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    var AddMembers = await _MemberShipService.MemberShips(members);
                    return Ok(AddMembers);
                }
                catch (Exception)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Error", Message = "Bad Content Found" });
                }
            }
            else
            {
                return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Validation Error", Message = "Bad Content Found" });
            }
        }
        // for getting the membershiplist
        [HttpGet]
        [Route("MembersipList")]
        public IActionResult GetAll()
        {
            try
            {
                var MembersList = _MemberShipService.MemberShips();
                return Ok(MembersList);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Internal Server Error" });
            }
        }
        // for adding user chats
        [HttpPost]
        [Route("Chats")]
        public async Task<IActionResult> PostChats(Chats userChats)
        {
            try
            {
              return Ok(await _ChatsService.Chat(userChats));
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest,new Response { Status="Error",Message="Bad Request Data"});
            }
        }
        // for getting sender messages
        [HttpGet]
        [Route("SenderMessages")]
        public IActionResult GetSenderMessage(int senderId,int recieverId)
        {
            try
            {
                var Message = _ChatsService.Chats(senderId,recieverId); 
                return Ok(Message);
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound,new Response { Status="Error",Message="Data Not Found"});
            }
        }
        // for getting reciever messages
        [HttpGet]
        [Route("RecieverMessages")]
        public IActionResult GetRecieverMessage(int senderId, int recieverId)
        {
            try
            {
                var Message = _ChatsService.Chat(senderId, recieverId);
                return Ok(Message);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data Not Found" });
            }
        }
    }
}
