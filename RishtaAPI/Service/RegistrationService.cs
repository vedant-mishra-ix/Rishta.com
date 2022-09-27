using RishtaAPI.DAL;
using RishtaAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;


namespace RishtaAPI.Service
{
    public interface IRegistrationService
    {
        public Task<Registration> Registration(Registration addUser);
        public IEnumerable<Registration> Registrations(int id);
        public IEnumerable<Registration> Registrations();
        public IEnumerable<Registration> RegistrationGenderBased(string sex);
        public IEnumerable<Registration> RegistrationGenderMartialStatus(string martialStatus);
        public IEnumerable<Registration> RegistrationGenderFamilyType(string familyType);
        public UserProfile Registrationuser(string username);
        public Task<Update> RegistrationUpdate(Update updateProfile);
        public Registration Registration(int id);
    }
    public class RegistrationService : IRegistrationService
    {
        private readonly IRegistration _service;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public RegistrationService(IRegistration service, IWebHostEnvironment hostEnvironment)
        {
            _service = service;
            _webHostEnvironment = hostEnvironment;
        }

        public async Task<Registration> Registration(Registration addUser)
        {
            var AddObj = new Entity.Registration
            {
                UserName = addUser.UserName,
                Email = addUser.Email,
                Mobile = addUser.Mobile,
                DateOfBirth = addUser.DateOfBirth,
                CreatedDateTime = DateTime.Now,
                Password = addUser.Password,
                Address = addUser.Address,
                Cast = addUser.Cast,
                Sex = addUser.Sex,
                Religious = addUser.Religious,
                MartialStatus = addUser.MartialStatus,
                MotherTongue = addUser.MotherTongue,
                Height = addUser.Height,
                Country = addUser.Country,
                State = addUser.State,
                City = addUser.City,
                HighestEducation = addUser.HighestEducation,
                Occupation = addUser.Occupation,
                AnnualIncome = addUser.AnnualIncome,
                ParentMobile = addUser.ParentMobile,
                FamilyType = addUser.FamilyType,
                FamilyStatus = addUser.FamilyStatus,
                ProfilePhoto = addUser.ProfilePhoto,
                IsActive = true,
            };

            var DataAdd = await _service.Registration(AddObj);
            return new Registration { Id = DataAdd.Id };
        }

        public Registration Registration(int id)
        {
            var data = _service.Registrations().FirstOrDefault(obj => obj.Id == id);
            _service.Registration(id);
            return new Registration { Id=id,UserName = data.UserName};
        }

        public UserProfile Registrationuser(string username)
        {
            var SpecificUser = _service.Registrations(username);

            return new UserProfile()
            {
                Id = SpecificUser.Id,
                UserName = SpecificUser.UserName,
                Email = SpecificUser.Email,
                Mobile = SpecificUser.Mobile,
                DateOfBirth =  SpecificUser.DateOfBirth.Date,
                CreatedDateTime = SpecificUser.CreatedDateTime,
                ModifiedDateTime = SpecificUser.ModifiedDateTime,
                Password = SpecificUser.Password,
                Address = SpecificUser.Address,
                Cast = SpecificUser.Cast,
                Sex = SpecificUser.Sex,
                Religious = SpecificUser.Religious,
                MartialStatus = SpecificUser.MartialStatus,
                MotherTongue = SpecificUser.MotherTongue,
                Height = SpecificUser.Height,
                Country = SpecificUser.Country,
                State = SpecificUser.State,
                City = SpecificUser.City,
                HighestEducation = SpecificUser.HighestEducation,
                Occupation = SpecificUser.Occupation,
                AnnualIncome = SpecificUser.AnnualIncome,
                ParentMobile = SpecificUser.ParentMobile,
                FamilyType = SpecificUser.FamilyType,
                FamilyStatus = SpecificUser.FamilyStatus,
                ProfilePhoto = SpecificUser.ProfilePhoto,
            };

        }

        public IEnumerable<Registration> Registrations(int id)
        {
            var AllData = _service.Registrations(id);

            return (from AllDetails in AllData
                    select new Registration
                    {
                        Id = AllDetails.Id,
                        UserName = AllDetails.UserName,
                        Email = AllDetails.Email,
                        Mobile = AllDetails.Mobile,
                        DateOfBirth = AllDetails.DateOfBirth,
                        CreatedDateTime = AllDetails.CreatedDateTime,
                        ModifiedDateTime = AllDetails.ModifiedDateTime,
                        Password = AllDetails.Password,
                        Address = AllDetails.Address,
                        Cast = AllDetails.Cast,
                        Sex = AllDetails.Sex,
                        Religious = AllDetails.Religious,
                        MartialStatus = AllDetails.MartialStatus,
                        MotherTongue = AllDetails.MotherTongue,
                        Height = AllDetails.Height,
                        Country = AllDetails.Country,
                        State = AllDetails.State,
                        City = AllDetails.City,
                        HighestEducation = AllDetails.HighestEducation,
                        Occupation = AllDetails.Occupation,
                        AnnualIncome = AllDetails.AnnualIncome,
                        ParentMobile = AllDetails.ParentMobile,
                        FamilyType = AllDetails.FamilyType,
                        FamilyStatus = AllDetails.FamilyStatus,
                        ProfilePhoto = AllDetails.ProfilePhoto,

                    }).ToList();
        }

        public async Task<Update> RegistrationUpdate(Update updateProfile)
        {
            var UpdateObj = new Entity.Registration
            {
                Id = updateProfile.Id,
                UserName = updateProfile.UserName,
                Email = updateProfile.Email,
                Mobile = updateProfile.Mobile,
                DateOfBirth = updateProfile.DateOfBirth,
                CreatedDateTime = updateProfile.CreatedDateTime,
                ModifiedDateTime = DateTime.Now,
                Password = updateProfile.Password,
                Address = updateProfile.Address,
                Cast = updateProfile.Cast,
                Sex = updateProfile.Sex,
                Religious = updateProfile.Religious,
                MartialStatus = updateProfile.MartialStatus,
                MotherTongue = updateProfile.MotherTongue,
                Height = updateProfile.Height,
                Country = updateProfile.Country,
                State = updateProfile.State,
                City = updateProfile.City,
                HighestEducation = updateProfile.HighestEducation,
                Occupation = updateProfile.Occupation,
                AnnualIncome = updateProfile.AnnualIncome,
                ParentMobile = updateProfile.ParentMobile,
                FamilyType = updateProfile.FamilyType,
                FamilyStatus = updateProfile.FamilyStatus,
                ProfilePhoto = updateProfile.ProfilePhoto,
            };
            await _service.Registration(UpdateObj, updateProfile.Id);
            return new Update { Id = UpdateObj.Id };
        }

        public IEnumerable<Registration> Registrations()
        {
            var GetAll = _service.Registrations();
            return (from AllData in GetAll
                    select new Registration
                    {
                        Id = AllData.Id,
                        UserName = AllData.UserName,
                        Email = AllData.Email,
                        Mobile = AllData.Mobile,
                        DateOfBirth = AllData.DateOfBirth,
                        CreatedDateTime = AllData.CreatedDateTime,
                        ModifiedDateTime = DateTime.Now,
                        Password = AllData.Password,
                        Address = AllData.Address,
                        Cast = AllData.Cast,
                        Sex = AllData.Sex,
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
                        ParentMobile = AllData.ParentMobile,
                        FamilyType = AllData.FamilyType,
                        FamilyStatus = AllData.FamilyStatus,
                        ProfilePhoto = AllData.ProfilePhoto,
                    }).ToList();
        }
        public IEnumerable<Registration> RegistrationGenderBased(string sex)
        {
            var GenderBased = _service.RegistrationsGender(sex);
            return (from Gender in GenderBased
                    select new Registration
                    {
                        Id = Gender.Id,
                        UserName = Gender.UserName,
                        Email = Gender.Email,
                        Mobile = Gender.Mobile,
                        DateOfBirth = Gender.DateOfBirth,
                        Password = Gender.Password,
                        Address = Gender.Address,
                        Cast = Gender.Cast,
                        Sex = Gender.Sex,
                        Religious = Gender.Religious,
                        MartialStatus = Gender.MartialStatus,
                        MotherTongue = Gender.MotherTongue,
                        Height = Gender.Height,
                        Country = Gender.Country,
                        State = Gender.State,
                        City = Gender.City,
                        HighestEducation = Gender.HighestEducation,
                        Occupation = Gender.Occupation,
                        AnnualIncome = Gender.AnnualIncome,
                        ParentMobile = Gender.ParentMobile,
                        FamilyType = Gender.FamilyType,
                        FamilyStatus = Gender.FamilyStatus,
                        ProfilePhoto = Gender.ProfilePhoto,
                    }).ToList();
        }

        public IEnumerable<Registration> RegistrationGenderMartialStatus(string martialStatus)
        {
            var MartialStatusBased = _service.RegistrationsMartialStatus(martialStatus);
            return (from Martial in MartialStatusBased
                    select new Registration
                    {
                        Id = Martial.Id,
                        UserName = Martial.UserName,
                        Email = Martial.Email,
                        Mobile = Martial.Mobile,
                        DateOfBirth = Martial.DateOfBirth,
                        Password = Martial.Password,
                        Address = Martial.Address,
                        Cast = Martial.Cast,
                        Sex = Martial.Sex,
                        Religious = Martial.Religious,
                        MartialStatus = Martial.MartialStatus,
                        MotherTongue = Martial.MotherTongue,
                        Height = Martial.Height,
                        Country = Martial.Country,
                        State = Martial.State,
                        City = Martial.City,
                        HighestEducation = Martial.HighestEducation,
                        Occupation = Martial.Occupation,
                        AnnualIncome = Martial.AnnualIncome,
                        ParentMobile = Martial.ParentMobile,
                        FamilyType = Martial.FamilyType,
                        FamilyStatus = Martial.FamilyStatus,
                        ProfilePhoto = Martial.ProfilePhoto,
                    }).ToList();
        }

        public IEnumerable<Registration> RegistrationGenderFamilyType(string familyType)
        {
            var FamilyTypeBased = _service.RegistrationsFamilyType(familyType);
            return (from Family in FamilyTypeBased
                    select new Registration
                    {
                        Id = Family.Id,
                        UserName = Family.UserName,
                        Email = Family.Email,
                        Mobile = Family.Mobile,
                        DateOfBirth = Family.DateOfBirth,
                        Password = Family.Password,
                        Address = Family.Address,
                        Cast = Family.Cast,
                        Sex = Family.Sex,
                        Religious = Family.Religious,
                        MartialStatus = Family.MartialStatus,
                        MotherTongue = Family.MotherTongue,
                        Height = Family.Height,
                        Country = Family.Country,
                        State = Family.State,
                        City = Family.City,
                        HighestEducation = Family.HighestEducation,
                        Occupation = Family.Occupation,
                        AnnualIncome = Family.AnnualIncome,
                        ParentMobile = Family.ParentMobile,
                        FamilyType = Family.FamilyType,
                        FamilyStatus = Family.FamilyStatus,
                        ProfilePhoto = Family.ProfilePhoto,
                    }).ToList();
        }
    }
}
