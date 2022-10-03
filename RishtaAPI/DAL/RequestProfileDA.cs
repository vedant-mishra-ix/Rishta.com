using Microsoft.EntityFrameworkCore;
using RishtaAPI.Data;
using RishtaAPI.Entity;
using RishtaAPI.Model;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.DAL
{
    public interface IRequestProfile
    {
        public Task<Entity.RequestProfile> RequestProfiles(Entity.RequestProfile requestProfile);
        public IEnumerable<RequestProfileVM> RequestProfiles(int id);
        public IEnumerable<RequestProfileVM> RequestProfileHistory(int id);
        public bool RequestProfile(RequestDelete delete);
    }
    public class RequestProfileDA : IRequestProfile
    {
        private readonly CoreDbContextNew _context;
        public RequestProfileDA(CoreDbContextNew context)
        {
            _context = context;
        }

        public bool RequestProfile(RequestDelete delete)
        {
            var DeleteData = _context.RequestProfile.Where(obj => obj.RequestId == delete.RegisteredId && obj.RegisteredId == delete.RequestId).FirstOrDefault();
            if (DeleteData != null)
            {
                _context.RequestProfile.Remove(DeleteData);
                _context.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public IEnumerable<RequestProfileVM> RequestProfileHistory(int id)
        {
            var Data = _context.RequestProfile.Include(x => x.Registration);
            var UserId = _context.RequestProfile.Any(obj => obj.RequestId == id);
            if (UserId)
            {
                var RequestData = _context.RequestProfile.Where(obj=>obj.RequestId==id).Join(_context.Registration,
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

        public async Task<Entity.RequestProfile> RequestProfiles(Entity.RequestProfile requestProfile)
        {
            var AddRequestProfile = await _context.RequestProfile.AddAsync(requestProfile);
            _context.SaveChanges();
            return AddRequestProfile.Entity;
        }

        public IEnumerable<RequestProfileVM> RequestProfiles(int id)
        {
            var data = _context.RequestProfile.Include(x => x.Registration);
            var UserId = _context.RequestProfile.Any(obj => obj.RegisteredId == id);
            if (UserId)
            {
                var RequestData = _context.RequestProfile.Join(_context.Registration,
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
