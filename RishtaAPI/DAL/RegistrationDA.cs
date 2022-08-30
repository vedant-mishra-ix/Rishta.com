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
        public IEnumerable<Registration> Registrations();
        public bool Registration(Registration obj , int Id);
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

        public bool Registration(Registration obj, int Id)
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
                RegistrationDb.SaveChanges();
                return true;
            }
            else
            {
                return false;
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

        public IEnumerable<Registration> Registrations()
        {
            var GetAllData = RegistrationDb.Registration.ToList();
            RegistrationDb.SaveChanges();
            return GetAllData;
        }
    }
}
