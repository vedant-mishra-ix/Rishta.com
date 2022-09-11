using RishtaAPI.DAL;
using RishtaAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Service
{
    public interface IRequestProfileService
    {
        public Task<RequestProfile> RequestProfiles(RequestSend request);
        public IEnumerable<RequestProfileVM> RequestProfiles(int Id);
        public IEnumerable<RequestProfileVM> RequestProfileHistory(int Id);
    }
    public class RequestProfileService : IRequestProfileService
    {
        private readonly IRequestProfile _RequestProfileDa;
        public RequestProfileService(IRequestProfile RequestProfileDa)
        {
            _RequestProfileDa = RequestProfileDa;
        }

        public IEnumerable<RequestProfileVM> RequestProfileHistory(int Id)
        {
            var RequestProfileDataHistory = _RequestProfileDa.RequestProfileHistory(Id);
            return (from AllData in RequestProfileDataHistory
                    select new RequestProfileVM
                    {
                        RegisteredId = AllData.RegisteredId,
                        RequestId = AllData.RequestId,
                        RequestUserName = AllData.RequestUserName,
                        RequestEmail = AllData.RequestEmail,
                        RequestImage = AllData.RequestImage,
                        RequestCount = AllData.RequestCount,

                    }).ToList();
        }

        public async Task<RequestProfile> RequestProfiles(RequestSend request)
        {
            var AddRequestProfile = new Entity.RequestProfile
            {
                RegisteredId = request.RegisteredId,
                RequestId = request.RequestId,
                CreatedDateTime = DateTime.Now,
            };
            var AddData = await _RequestProfileDa.RequestProfiles(AddRequestProfile);
            return new RequestProfile { Id = AddRequestProfile.Id};
        }

        public IEnumerable<RequestProfileVM> RequestProfiles(int Id)
        {
            var RequestProfileData = _RequestProfileDa.RequestProfiles(Id);
            return (from AllData in RequestProfileData
                    select new RequestProfileVM
                    {
                        RegisteredId = AllData.RegisteredId,
                        RequestId = AllData.RequestId,
                        RequestUserName = AllData.RequestUserName,
                        RequestEmail = AllData.RequestEmail,
                        RequestImage = AllData.RequestImage,
                        RequestCount = AllData.RequestCount,

                    }).ToList();
        }
    }
}
