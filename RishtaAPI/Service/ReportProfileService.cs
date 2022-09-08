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
        public Task<ReportProfile> ReportProfile(int Id);
        public IEnumerable<ReportProfileVM> ReportProfiles();
    }
    public class ReportProfileService : IReportProfileService
    {
        private readonly IReportProfile _ReportProfileDa;
        public ReportProfileService(IReportProfile ReportProfileDa)
        {
            _ReportProfileDa = ReportProfileDa;
        }
        public async Task<ReportProfile> ReportProfile(int Id)
        {
            var AddReportProfile = new Entity.ReportProfile
            {
                RegisteredId = Id,
                CreatedDateTime = DateTime.Now,
            };
            var AddData = await _ReportProfileDa.ReportProfile(AddReportProfile);
            return new ReportProfile { Id = AddReportProfile.Id };
        }

        public IEnumerable<ReportProfileVM> ReportProfiles()
        {
            var ReportedData = _ReportProfileDa.ReportProfiles();
            return (from AllData in ReportedData
                    select new Model.ReportProfileVM
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
