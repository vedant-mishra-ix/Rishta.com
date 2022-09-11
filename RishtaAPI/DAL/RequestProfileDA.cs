using Microsoft.EntityFrameworkCore;
using RishtaAPI.Data;
using RishtaAPI.Entity;
using RishtaAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.DAL
{
    public interface IRequestProfile
    {
        public Task<Entity.RequestProfile> RequestProfiles(Entity.RequestProfile obj);
        public IEnumerable<RequestProfileVM> RequestProfiles(int Id);
        public IEnumerable<RequestProfileVM> RequestProfileHistory(int Id);
    }
    public class RequestProfileDA : IRequestProfile
    {
        private readonly CoreDbContext _RequestProfileDb;
        public RequestProfileDA(CoreDbContext RequestProfileDb)
        {
            _RequestProfileDb = RequestProfileDb;
        }

        public IEnumerable<RequestProfileVM> RequestProfileHistory(int Id)
        {
            var Data = _RequestProfileDb.RequestProfile.Include(x => x.Registration);
            var UserId = _RequestProfileDb.RequestProfile.Any(obj => obj.RequestId == Id);
            if (UserId)
            {
                var RequestData = _RequestProfileDb.RequestProfile.Join(_RequestProfileDb.Registration,
                                    RequestId => RequestId.RegisteredId,
                                    RegisteredId => RegisteredId.Id,
                                    (RequestId, RegisteredId) => new RequestProfileVM
                                    {
                                        RequestId = RegisteredId.Id,
                                        RegisteredId = RequestId.RequestId,
                                        RequestUserName = RegisteredId.UserName,
                                        RequestEmail = RegisteredId.Email,
                                        RequestImage = RegisteredId.ProfilePhoto,
                                    }).Distinct().ToList();
                return RequestData;
            }
            else
            {
                return null;
            }
        }

        public async Task<Entity.RequestProfile> RequestProfiles(Entity.RequestProfile obj)
        {
            var AddRequestProfile = await _RequestProfileDb.RequestProfile.AddAsync(obj);
            _RequestProfileDb.SaveChanges();
            return AddRequestProfile.Entity;
        }

        public IEnumerable<RequestProfileVM> RequestProfiles(int Id)
        {
            var data = _RequestProfileDb.RequestProfile.Include(x => x.Registration);
            var UserId = _RequestProfileDb.RequestProfile.Any(obj => obj.RegisteredId == Id);
            if (UserId)
            {
                var RequestData = _RequestProfileDb.RequestProfile.Join(_RequestProfileDb.Registration,
                                    RequestId => RequestId.RequestId,
                                    RegisteredId => RegisteredId.Id,
                                    (RequestId, RegisteredId) => new RequestProfileVM
                                    {
                                        RequestId = RegisteredId.Id,
                                        RegisteredId = RequestId.RegisteredId,
                                        RequestUserName = RegisteredId.UserName,
                                        RequestEmail = RegisteredId.Email,
                                        RequestImage = RegisteredId.ProfilePhoto,
                                        RequestCount = data.Where(y => y.Registration.Id == RequestId.RegisteredId).Count(),
                                    }).Distinct().ToList();
                return RequestData;
            }
            else
            {
                return null;
            }
           
        }
    }
}
