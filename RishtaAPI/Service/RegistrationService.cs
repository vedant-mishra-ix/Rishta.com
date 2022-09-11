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
        public Task<Model.Registration> Registration(Model.Registration obj);
        public IEnumerable<Model.Registration> Registrations(int Id);
        public IEnumerable<Model.Registration> Registrations();
        public IEnumerable<Model.Registration> RegistrationGenderBased(string Sex);
        public IEnumerable<Model.Registration> RegistrationGenderMartialStatus(string MartialStatus);
        public IEnumerable<Model.Registration> RegistrationGenderFamilyType(string FamilyType);
        public UserProfile Registrationuser(string Username);
        public Task<Update> RegistrationUpdate(Model.Update obj);
        public Model.Registration Registration(int Id);
    }
    public class RegistrationService : IRegistrationService
    {
        private readonly IRegistration _RegistrationDa;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public RegistrationService(IRegistration RegistrationDa, IWebHostEnvironment hostEnvironment)
        {
            _RegistrationDa = RegistrationDa;
            _webHostEnvironment = hostEnvironment;
        }

        public async Task<Model.Registration> Registration(Model.Registration obj)
        {
            var AddObj = new Entity.Registration
            {
                UserName = obj.UserName,
                Email = obj.Email,
                Mobile = obj.Mobile,
                DateOfBirth = obj.DateOfBirth,
                CreatedDateTime = DateTime.Now,
                Password = obj.Password,
                Address = obj.Address,
                Cast = obj.Cast,
                Sex = obj.Sex,
                Religious = obj.Religious,
                MartialStatus = obj.MartialStatus,
                MotherTongue = obj.MotherTongue,
                Height = obj.Height,
                Country = obj.Country,
                State = obj.State,
                City = obj.City,
                HighestEducation = obj.HighestEducation,
                Occupation = obj.Occupation,
                AnnualIncome = obj.AnnualIncome,
                ParentMobile = obj.ParentMobile,
                FamilyType = obj.FamilyType,
                FamilyStatus = obj.FamilyStatus,
                ProfilePhoto = obj.ProfilePhoto,
                IsActive = true,
            };

            var DataAdd = await _RegistrationDa.Registration(AddObj);
            return new Model.Registration { Id = DataAdd.Id };
        }

        public Model.Registration Registration(int Id)
        {
            _RegistrationDa.Registration(Id);
            return new Model.Registration { Id=Id};
        }

        public UserProfile Registrationuser(string Username)
        {
            var SpecificUser = _RegistrationDa.Registrations(Username);

            return new UserProfile()
            {
                Id = SpecificUser.Id,
                UserName = SpecificUser.UserName,
                Email = SpecificUser.Email,
                Mobile = SpecificUser.Mobile,
                DateOfBirth = SpecificUser.DateOfBirth,
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
                ProfilePhoto = SpecificUser.ProfilePhoto
            };

        }

        public IEnumerable<Model.Registration> Registrations(int Id)
        {
            var AllData = _RegistrationDa.Registrations(Id);
            return (from AllDetails in AllData
                    select new Model.Registration
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
                        ProfilePhoto = AllDetails.ProfilePhoto

                    }).ToList();
        }

        public async Task<Update> RegistrationUpdate(Model.Update obj)
        {
            var UpdateObj = new Entity.Registration
            {
                Id = obj.Id,
                UserName = obj.UserName,
                Email = obj.Email,
                Mobile = obj.Mobile,
                DateOfBirth = obj.DateOfBirth,
                CreatedDateTime = obj.CreatedDateTime,
                ModifiedDateTime = DateTime.Now,
                Password = obj.Password,
                Address = obj.Address,
                Cast = obj.Cast,
                Sex = obj.Sex,
                Religious = obj.Religious,
                MartialStatus = obj.MartialStatus,
                MotherTongue = obj.MotherTongue,
                Height = obj.Height,
                Country = obj.Country,
                State = obj.State,
                City = obj.City,
                HighestEducation = obj.HighestEducation,
                Occupation = obj.Occupation,
                AnnualIncome = obj.AnnualIncome,
                ParentMobile = obj.ParentMobile,
                FamilyType = obj.FamilyType,
                FamilyStatus = obj.FamilyStatus,
                ProfilePhoto = obj.ProfilePhoto,
            };
            var Dat = await _RegistrationDa.Registration(UpdateObj, obj.Id);
            return new Update { Id = UpdateObj.Id };
        }

        public IEnumerable<Model.Registration> Registrations()
        {
            var GetAll = _RegistrationDa.Registrations();
            return (from AllData in GetAll
                    select new Model.Registration
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


        public IEnumerable<Model.Registration> RegistrationGenderBased(string Sex)
        {
            var GenderBased = _RegistrationDa.RegistrationsGender(Sex);
            return (from Gender in GenderBased
                    select new Model.Registration
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

        public IEnumerable<Model.Registration> RegistrationGenderMartialStatus(string MartialStatus)
        {
            var MartialStatusBased = _RegistrationDa.RegistrationsMartialStatus(MartialStatus);
            return (from Martial in MartialStatusBased
                    select new Model.Registration
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

        public IEnumerable<Model.Registration> RegistrationGenderFamilyType(string FamilyType)
        {
            var FamilyTypeBased = _RegistrationDa.RegistrationsFamilyType(FamilyType);
            return (from Family in FamilyTypeBased
                    select new Model.Registration
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
