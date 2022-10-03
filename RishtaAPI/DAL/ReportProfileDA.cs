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
        public Task<Entity.ReportProfile> ReportProfile(Entity.ReportProfile reportProfile);
        public IEnumerable<ReportProfileVM> ReportProfiles();
    }
    public class ReportProfileDA : IReportProfile
    {
        private readonly CoreDbContextNew _context;
        public ReportProfileDA(CoreDbContextNew context)
        {
            _context = context;
        }
        public async Task<Entity.ReportProfile> ReportProfile(Entity.ReportProfile reportProfile)
        {
            try
            {
                var ReportedProfileAdd = await _context.ReportProfile.AddAsync(reportProfile);
                _context.SaveChanges();
                return ReportedProfileAdd.Entity;
            }
            catch(Exception )
            {
                throw;
            }      
        }
        public IEnumerable<ReportProfileVM> ReportProfiles()
        {
            var data = _context.ReportProfile.Include(x => x.Registration);
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
