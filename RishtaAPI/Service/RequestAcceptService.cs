
using RishtaAPI.DAL;
using RishtaAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Service
{
    public interface IRequestAcceptService
    {
        public Task<RequestAccept> RequestAccepts(RequestSend request);
        public IEnumerable<RequestAcceptVM> RequestAccept(int id);
    }
    public class RequestAcceptService:IRequestAcceptService
    {
        private readonly IRequestAccept _service;
        public RequestAcceptService(IRequestAccept service)
        {
            _service = service;
        }

        public IEnumerable<RequestAcceptVM> RequestAccept(int id)
        {
            var RequestAcceptData = _service.RequestAccept(id);
            return (from AllData in RequestAcceptData
                    select new RequestAcceptVM
                    {
                        Id = AllData.Id,
                        RequestSenderId = AllData.RequestSenderId,
                        UserName = AllData.UserName,
                        UserEmail = AllData.UserEmail,
                        Gender = AllData.Gender,
                        ProfilePhoto = AllData.ProfilePhoto,
                        Address = AllData.Address,
                        Cast = AllData.Cast,
                        Religious = AllData.Religious,
                        MartialStatus = AllData.MartialStatus,
                        MotherTongue = AllData.MotherTongue,
                        Height = AllData.Height,
                        Country = AllData.Country,
                        State = AllData.State,
                        City = AllData.City,
                        HighestEducation = AllData.HighestEducation,
                        Occupation = AllData.Occupation,
                        AnnualIncome = AllData.AnnualIncome,
                        FamilyStatus = AllData.FamilyStatus,
                        FamilyType = AllData.FamilyType,
                        Mobile = AllData.Mobile,
                    }).ToList();
        }
        public async Task<RequestAccept> RequestAccepts(RequestSend request)
        {
            var AddRequestAccept = new Entity.RequestAccept
            {
                RegisteredId = request.RegisteredId,
                RequestAcceptId = request.RequestId,
                CreatedDateTime = DateTime.Now,
            };
            var AddData = await _service.RequestAccepts(AddRequestAccept);
            return new RequestAccept { Id = AddRequestAccept.Id };
        }
    }
}
