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
    public interface IReportProfile
    {
        public Task<Entity.ReportProfile> ReportProfile(Entity.ReportProfile obj);
        public IEnumerable<ReportProfileVM> ReportProfiles();
    }
    public class ReportProfileDA : IReportProfile
    {
        private readonly CoreDbContext _ReportProfileDb;
        public ReportProfileDA(CoreDbContext ReportProfileDb)
        {
            _ReportProfileDb = ReportProfileDb;
        }
        public async Task<Entity.ReportProfile> ReportProfile(Entity.ReportProfile obj)
        {
            try
            {
                var ReportedProfileAdd = await _ReportProfileDb.ReportProfile.AddAsync(obj);
                _ReportProfileDb.SaveChanges();
                return ReportedProfileAdd.Entity;
            }
            catch(Exception e)
            {
                throw;
            }      
        }
        // First way 
        //public IEnumerable<ReportProfileVM> ReportProfiles()
        //{
        //    var ReportedProfiles = _ReportProfileDb.ReportProfile.Join(ReportProfileDb.Registration,
        //                            ReportedId => ReportedId.RegisteredId,
        //                            ReportProfileId => ReportProfileId.Id,
        //                            (ReportedId, ReportProfileId) => new ReportProfileVM
        //                            {
        //                                ReportedId = ReportedId.RegisteredId,
        //                                ReportedUserName = ReportProfileId.UserName,
        //                                ReportedEmail = ReportProfileId.Email,
        //                                ReportedImage = ReportProfileId.ProfilePhoto
        //                            }).ToList();
        //    return ReportedProfiles;
        //}
        public IEnumerable<ReportProfileVM> ReportProfiles()
        {
            var data = _ReportProfileDb.ReportProfile.Include(x => x.Registration);
            var ReportedProfiles = data.Select(x => new ReportProfileVM
                {
                    ReportedId = x.Registration.Id,
                    ReportedUserName = x.Registration.UserName,
                    ReportedEmail = x.Registration.Email,
                    ReportedImage = x.Registration.ProfilePhoto,
                    ReportedCount = data.Where(y => y.RegisteredId == x.Registration.Id).Count()
                }).Distinct().ToList();
            return ReportedProfiles;
        }
    }
}
