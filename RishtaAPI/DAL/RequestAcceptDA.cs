
using RishtaAPI.Data;
using RishtaAPI.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.DAL
{
    public interface IRequestAccept
    {
        public Task<RequestAccept> RequestAccepts(RequestAccept requestAccept);
        public IEnumerable<Model.RequestAcceptVM> RequestAccept(int id);
    }
    public class RequestAcceptDA : IRequestAccept
    {
        private readonly CoreDbContextNew _context;
        public RequestAcceptDA(CoreDbContextNew context)
        {
            _context = context;
        }

        public IEnumerable<Model.RequestAcceptVM> RequestAccept(int id)
        {
            var UserId = _context.RequestAccept.Any(obj => obj.RequestAcceptId == id);//request accept
            var SenderId = _context.RequestAccept.Any(obj => obj.RegisteredId == id);//request sender
            // here we are fetching Request sender records
            if (UserId)
            {
                var RequestData = _context.RequestAccept.Where(obj => obj.RequestAcceptId == id).Join(_context.Registration,
                                    RequestId => RequestId.RegisteredId,
                                    RegisteredId => RegisteredId.Id,
                                    (RequestId, RegisteredId) => new Model.RequestAcceptVM
                                    {
                                        Id = RequestId.RegisteredId,
                                        RequestSenderId = RequestId.RegisteredId,
                                        UserName = RegisteredId.UserName,
                                        UserEmail = RegisteredId.Email,
                                        Gender = RegisteredId.Sex,
                                        ProfilePhoto = RegisteredId.ProfilePhoto,
                                        Address = RegisteredId.Address,
                                        Cast = RegisteredId.Cast,
                                        Religious = RegisteredId.Religious,
                                        MartialStatus = RegisteredId.MartialStatus,
                                        MotherTongue = RegisteredId.MotherTongue,
                                        Height = RegisteredId.Height,
                                        Country = RegisteredId.Country,
                                        State = RegisteredId.State,
                                        City = RegisteredId.City,
                                        HighestEducation = RegisteredId.HighestEducation,
                                        Occupation = RegisteredId.Occupation,
                                        AnnualIncome = RegisteredId.AnnualIncome,
                                        FamilyStatus = RegisteredId.FamilyStatus,
                                        FamilyType = RegisteredId.FamilyType,
                                        Mobile = RegisteredId.Mobile,

                                    }).Distinct().ToList();
                return RequestData;
            }
            // here we are fetching request Acceptor record
            else if(SenderId)
            {
                var RequestData = _context.RequestAccept.Where(obj => obj.RegisteredId == id).Join(_context.Registration,
                                    RequestId => RequestId.RequestAcceptId,
                                    RegisteredId => RegisteredId.Id,
                                    (RequestId, RegisteredId) => new Model.RequestAcceptVM
                                    {
                                        Id = RequestId.RegisteredId,
                                        RequestSenderId = RequestId.RequestAcceptId,
                                        UserName = RegisteredId.UserName,
                                        UserEmail = RegisteredId.Email,
                                        Gender = RegisteredId.Sex,
                                        ProfilePhoto = RegisteredId.ProfilePhoto,
                                        Address = RegisteredId.Address,
                                        Cast = RegisteredId.Cast,
                                        Religious = RegisteredId.Religious,
                                        MartialStatus = RegisteredId.MartialStatus,
                                        MotherTongue = RegisteredId.MotherTongue,
                                        Height = RegisteredId.Height,
                                        Country = RegisteredId.Country,
                                        State = RegisteredId.State,
                                        City = RegisteredId.City,
                                        HighestEducation = RegisteredId.HighestEducation,
                                        Occupation = RegisteredId.Occupation,
                                        AnnualIncome = RegisteredId.AnnualIncome,
                                        FamilyStatus = RegisteredId.FamilyStatus,
                                        FamilyType = RegisteredId.FamilyType,
                                        Mobile = RegisteredId.Mobile,
                                    }).Distinct().ToList();
                return RequestData;
            }
            else
            {
                return null;
            }
        }

        public async Task<RequestAccept> RequestAccepts(RequestAccept requestAccept)
        {
            var AddRequestAccept = await _context.RequestAccept.AddAsync(requestAccept);
            _context.SaveChanges();
            return AddRequestAccept.Entity;
        }
    }
}
