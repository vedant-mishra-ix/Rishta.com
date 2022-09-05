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
        public Task<Registration> Registration(Registration obj);
        public IEnumerable<Registration> Registrations(int Id);
        public IEnumerable<Registration> Registrations();
        public Registration Registrations(string UserName);
        public Task<Registration> Registration(Registration obj , int Id);
        public bool Registration(int Id);
    }
    public class RegistrationDA:IRegistration
    {
        private readonly CoreDbContext RegistrationDb;
        public RegistrationDA(CoreDbContext _RegistrationDb)
        {
            RegistrationDb = _RegistrationDb;
        }

        public async Task<Registration> Registration(Registration obj)
        {
            var AddData = await RegistrationDb.Registration.AddAsync(obj);
            RegistrationDb.SaveChanges();
            return AddData.Entity;
        }

        public async Task<Registration> Registration(Registration obj, int Id)
        {
            var DataUpdate = RegistrationDb.Registration.FirstOrDefault(obj => obj.Id == Id);
            if(DataUpdate != null)
            {
                DataUpdate.UserName = obj.UserName;
                DataUpdate.Email = obj.Email;
                DataUpdate.Mobile = obj.Mobile;
                DataUpdate.DateOfBirth = obj.DateOfBirth;
                DataUpdate.CreatedDateTime = obj.CreatedDateTime;
                DataUpdate.ModifiedDateTime = DateTime.Now;
                DataUpdate.Password = obj.Password;
                DataUpdate.Address = obj.Address;
                DataUpdate.Cast = obj.Cast;
                DataUpdate.Sex = obj.Sex;
                DataUpdate.Religious = obj.Religious;
                DataUpdate.MartialStatus = obj.MartialStatus;
                DataUpdate.MotherTongue = obj.MotherTongue;
                DataUpdate.Height = obj.Height;
                DataUpdate.Country = obj.Country;
                DataUpdate.State = obj.State;
                DataUpdate.City = obj.City;
                DataUpdate.HighestEducation = obj.HighestEducation;
                DataUpdate.Occupation = obj.Occupation;
                DataUpdate.AnnualIncome = obj.AnnualIncome;
                DataUpdate.ParentMobile = obj.ParentMobile;
                DataUpdate.FamilyType = obj.FamilyType;
                DataUpdate.FamilyStatus = obj.FamilyStatus;
                DataUpdate.ProfilePhoto = obj.ProfilePhoto;
                 var data = RegistrationDb.Registration.Update(DataUpdate);
                RegistrationDb.SaveChanges();
                return data.Entity;
            }
            else
            {
                return null;
            }
        }

        public bool Registration(int Id)
        {
            var DeleteData = RegistrationDb.Registration.FirstOrDefault(obj => obj.Id ==Id);
            if(DeleteData != null)
            {
                RegistrationDb.Registration.Remove(DeleteData);
                RegistrationDb.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public IEnumerable<Registration> Registrations(int Id)
        {
            var GetAllData = RegistrationDb.Registration.Where(obj => obj.Id != Id ).ToList();
            if(GetAllData != null)
            {
                RegistrationDb.SaveChanges();
                return GetAllData;
            }
            else
            {
                return null;
            }
        }

        public Registration Registrations(string UserName)
        {
            var SpecificUser =  RegistrationDb.Registration.FirstOrDefault(obj => obj.UserName == UserName);
            return SpecificUser;
        }

        public IEnumerable<Registration> Registrations()
        {
            var GetAll = RegistrationDb.Registration.ToList();
            RegistrationDb.SaveChanges();
            return GetAll;
        }
    }
}
