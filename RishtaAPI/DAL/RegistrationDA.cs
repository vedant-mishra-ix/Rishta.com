﻿using RishtaAPI.Data;
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
        public IEnumerable<Registration> RegistrationsGender(string Sex);
        public IEnumerable<Registration> RegistrationsMartialStatus(string MartialStatus);
        public IEnumerable<Registration> RegistrationsFamilyType(string FamilyType);
        public Registration Registrations(string UserName);
        public Task<Registration> Registration(Registration obj, int Id);
        public bool Registration(int Id);
    }
    public class RegistrationDA : IRegistration
    {
        private readonly CoreDbContext _RegistrationDb;
        public RegistrationDA(CoreDbContext RegistrationDb)
        {
            _RegistrationDb = RegistrationDb;
        }

        public async Task<Registration> Registration(Registration obj)
        {
            var AddData = await _RegistrationDb.Registration.AddAsync(obj);
            _RegistrationDb.SaveChanges();
            return AddData.Entity;
        }

        public async Task<Registration> Registration(Registration obj, int Id)
        {
            var DataUpdate = _RegistrationDb.Registration.FirstOrDefault(obj => obj.Id == Id);
            if (DataUpdate != null)
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
                var data = _RegistrationDb.Registration.Update(DataUpdate);
                _RegistrationDb.SaveChanges();
                return data.Entity;
            }
            else
            {
                return null;
            }
        }

        public bool Registration(int Id)
        {
            var DeleteData = _RegistrationDb.Registration.FirstOrDefault(obj => obj.Id == Id);
            if (DeleteData != null)
            {
                _RegistrationDb.Registration.Remove(DeleteData);
                _RegistrationDb.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public IEnumerable<Registration> Registrations(int Id)
        {
            var GetAllData = _RegistrationDb.Registration.Where(obj => obj.Id != Id).ToList();
            if (GetAllData != null)
            {
                _RegistrationDb.SaveChanges();
                return GetAllData;
            }
            else
            {
                return null;
            }
        }

        public Registration Registrations(string UserName)
        {
            var SpecificUser = _RegistrationDb.Registration.FirstOrDefault(obj => obj.UserName == UserName);
            return SpecificUser;
        }

        public IEnumerable<Registration> Registrations()
        {
            var GetAll = _RegistrationDb.Registration.ToList();
            _RegistrationDb.SaveChanges();
            return GetAll;
        }

        public IEnumerable<Registration> RegistrationsFamilyType(string FamilyType)
        {
            var FamilyBasedList = _RegistrationDb.Registration.Where(obj => obj.FamilyType == FamilyType).ToList();
            if (FamilyBasedList != null)
            {
                return FamilyBasedList;
            }
            else
            {
                return null;
            }
        }

        public IEnumerable<Registration> RegistrationsGender(string Sex)
        {
            var GenderBasedList = _RegistrationDb.Registration.Where(obj => obj.Sex == Sex).ToList();
            if (GenderBasedList != null)
            {
                return GenderBasedList;
            }
            else
            {
                return null;
            }
        }

        public IEnumerable<Registration> RegistrationsMartialStatus(string MartialStatus)
        {
            var MartialStatusBasedList = _RegistrationDb.Registration.Where(obj => obj.MartialStatus == MartialStatus).ToList();
            if (MartialStatusBasedList != null)
            {
                return MartialStatusBasedList;
            }
            else
            {
                return null;
            }
        }
    }
}
