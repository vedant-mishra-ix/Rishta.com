
using RishtaAPI.DAL;
using RishtaAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Service
{
    public interface IReportProfileService
    {
        public Task<ReportProfile> ReportProfile(int id);
        public IEnumerable<ReportProfileVM> ReportProfiles();
    }
    public class ReportProfileService : IReportProfileService
    {
        private readonly IReportProfile _service;
        public ReportProfileService(IReportProfile service)
        {
            _service = service;
        }
        public async Task<ReportProfile> ReportProfile(int id)
        {
            var AddReportProfile = new Entity.ReportProfile
            {
                RegisteredId = id,
                CreatedDateTime = DateTime.Now,
            };
            await _service.ReportProfile(AddReportProfile);
            return new ReportProfile { Id = AddReportProfile.Id };
        }

        public IEnumerable<ReportProfileVM> ReportProfiles()
        {
            var ReportedData = _service.ReportProfiles();
            return (from AllData in ReportedData
                    select new ReportProfileVM
                    {
                        ReportedId = AllData.ReportedId,
                        ReportedUserName = AllData.ReportedUserName,
                        ReportedEmail = AllData.ReportedEmail,
                        ReportedImage = AllData.ReportedImage,
                        ReportedCount = AllData.ReportedCount

                    }).ToList();
        }
    }
}
