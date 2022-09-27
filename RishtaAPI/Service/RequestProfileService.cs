
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
        public IEnumerable<RequestProfileVM> RequestProfiles(int id);
        public IEnumerable<RequestProfileVM> RequestProfileHistory(int id);
        public RequestProfileVM RequestProfile(RequestDelete delete);
    }
    public class RequestProfileService : IRequestProfileService
    {
        private readonly IRequestProfile _service;
        public RequestProfileService(IRequestProfile service)
        {
            _service = service;
        }

        public RequestProfileVM RequestProfile(RequestDelete delete)
        {
            _service.RequestProfile(delete);
            return new RequestProfileVM { RegisteredId = delete.RequestId };
        }

        public IEnumerable<RequestProfileVM> RequestProfileHistory(int id)
        {
            var RequestProfileDataHistory = _service.RequestProfileHistory(id);
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
            var AddData = await _service.RequestProfiles(AddRequestProfile);
            return new RequestProfile { Id = AddRequestProfile.Id};
        }

        public IEnumerable<RequestProfileVM> RequestProfiles(int id)
        {
            var RequestProfileData = _service.RequestProfiles(id);
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
