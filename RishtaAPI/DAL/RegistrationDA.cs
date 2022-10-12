using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using RishtaAPI.Data;
using RishtaAPI.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.DAL
{
    public interface IRegistration
    {
        public Task<Registration> Registration(Registration addUser);
        public IEnumerable<Registration> Registrations(int id);
        public IEnumerable<Registration> Registrations();
        public IEnumerable<Registration> RegistrationsGender(string sex);
        public IEnumerable<Registration> RegistrationsMartialStatus(string martialStatus);
        public IEnumerable<Registration> RegisteredSpecificProfile(int id);
        public Registration Registrations(string userName);
        public Task<Registration> Registration(Registration updateUser, int id);
        public bool Registration(int id);
    }
    public class RegistrationDA : IRegistration
    {
        private readonly CoreDbContextNew _context;
        private readonly IHttpContextAccessor _HttpContextAccessor;
        public RegistrationDA(CoreDbContextNew context, IHttpContextAccessor HttpContextAccessor)
        {
            _context = context;
            _HttpContextAccessor = HttpContextAccessor;
        }
        public async Task<Registration> Registration(Registration addUser)
        {
            var AddData = await _context.Registration.AddAsync(addUser);
            _context.SaveChanges();
            return AddData.Entity;
        }
        public async Task<Registration> Registration(Registration updateUser, int id)
        {
            var DataUpdate =  _context.Registration.FirstOrDefault(obj => obj.Id == id);
            if (DataUpdate != null)
            {
                DataUpdate.UserName = updateUser.UserName;
                DataUpdate.Email = updateUser.Email;
                DataUpdate.Mobile = updateUser.Mobile;
                DataUpdate.DateOfBirth = updateUser.DateOfBirth;
                DataUpdate.CreatedDateTime = updateUser.CreatedDateTime;
                DataUpdate.ModifiedDateTime = DateTime.Now;
                DataUpdate.Password = updateUser.Password;
                DataUpdate.Address = updateUser.Address;
                DataUpdate.Cast = updateUser.Cast;
                DataUpdate.Sex = updateUser.Sex;
                DataUpdate.Religious = updateUser.Religious;
                DataUpdate.MartialStatus = updateUser.MartialStatus;
                DataUpdate.MotherTongue = updateUser.MotherTongue;
                DataUpdate.Height = updateUser.Height;
                DataUpdate.Country = updateUser.Country;
                DataUpdate.State = updateUser.State;
                DataUpdate.City = updateUser.City;
                DataUpdate.HighestEducation = updateUser.HighestEducation;
                DataUpdate.Occupation = updateUser.Occupation;
                DataUpdate.AnnualIncome = updateUser.AnnualIncome;
                DataUpdate.ParentMobile = updateUser.ParentMobile;
                DataUpdate.FamilyType = updateUser.FamilyType;
                DataUpdate.FamilyStatus = updateUser.FamilyStatus;
                DataUpdate.ProfilePhoto = updateUser.ProfilePhoto;
                var data =  _context.Registration.Update(DataUpdate);
                _context.SaveChanges();
                return data.Entity;
            }
            else
            {
                return null;
            }
        }
        public bool Registration(int id)
        {
            var DeleteData = _context.Registration.FirstOrDefault(obj => obj.Id == id);
            if (DeleteData != null)
            {
                _context.Registration.Remove(DeleteData);
                _context.SaveChanges();
                return true;
            }      
            else
            {
                return false;
            }
        }
        public IEnumerable<Registration> Registrations(int id)
        {
            bool IsAdmin = _HttpContextAccessor.HttpContext.User.IsInRole("Admin");
            // Admin can get all registered records
            if (IsAdmin)
            {
                return _context.Registration.Where(obj => obj.Id != id).ToList();
            }
            // User can get all registered records
            // for membership user records getting 
            // if user does not have membership then display only three profiles
            // if  have membership then display profiles on h bassis of subscription
            string RegisteredGender = _context.Registration.FirstOrDefault(obj => obj.Id == id).Sex;
            int MemberCount = 3;
            bool HasMembership = _context.MemberShip.Any(obj => obj.RegisteredId == id);
            if (HasMembership)
            {
                MemberCount = _context.Registration.Include(x => x.MemberShip.Membership_Plans).FirstOrDefault(obj => obj.Id == id).MemberShip.Membership_Plans.ProfileVisible;
            }
            var GetAllData = _context.Registration.Where(obj => obj.Id != id && obj.Sex != RegisteredGender && obj.IsActive == true).Skip(MemberCount).Take(MemberCount+1).ToList();
            if (GetAllData != null)
            {
                return GetAllData;
            }
            else
            {
                return null;
            }
        }
        public Registration Registrations(string userName)
        {
            var SpecificUser = _context.Registration.FirstOrDefault(obj => obj.UserName == userName);
            return SpecificUser;
        }
        public IEnumerable<Registration> Registrations()
        {
            var GetAll = _context.Registration.ToList();
            _context.SaveChanges();
            return GetAll;
        }
        public IEnumerable<Registration> RegistrationsGender(string sex)
        {
            var GenderBasedList = _context.Registration.Where(obj => obj.Sex == sex).ToList();
            if (GenderBasedList != null)
            {
                return GenderBasedList;
            }
            else
            {
                return null;
            }
        }
        public IEnumerable<Registration> RegistrationsMartialStatus(string martialStatus)
        {
            var MartialStatusBasedList = _context.Registration.Where(obj => obj.MartialStatus == martialStatus).ToList();
            if (MartialStatusBasedList != null)
            {
                return MartialStatusBasedList;
            }
            else
            {
                return null;
            }
        }

        IEnumerable<Registration> IRegistration.RegisteredSpecificProfile(int id)
        {
            var FamilyBasedList = _context.Registration.Where(obj => obj.Id == id).ToList();
            if (FamilyBasedList != null)
            {
                return FamilyBasedList;
            }
            else
            {
                return null;
            }
        }
    }
}
