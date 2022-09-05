using RishtaAPI.DAL;
using RishtaAPI.Model;
using RishtaAPI.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace RishtaAPI.Service
{
    public interface IRegistrationService
    {
        public Task<Model.Registration> Registration(Model.Registration obj);
        public IEnumerable<Model.Registration> Registrations(int Id);
        public IEnumerable<Model.Registration> Registrations();
        public UserProfile Registrationuser(string Username);
        public Task<Update> RegistrationUpdate(Model.Update obj);
        public string Registration(int Id);
    }
    public class RegistrationService:IRegistrationService
    {
        private readonly IRegistration RegistrationDa;
        private readonly IWebHostEnvironment webHostEnvironment;
        public RegistrationService(IRegistration _RegistrationDa, IWebHostEnvironment hostEnvironment)
        {
            RegistrationDa = _RegistrationDa;
            webHostEnvironment = hostEnvironment;
        }

        public async Task<Model.Registration> Registration(Model.Registration obj)
        {
            var AddObj = new Entity.Registration
            {
                UserName=obj.UserName,
                Email=obj.Email,
                Mobile=obj.Mobile,
                DateOfBirth = obj.DateOfBirth,
                CreatedDateTime = DateTime.Now,
                Password =obj.Password,
                Address=obj.Address,
                Cast=obj.Cast,
                Sex=obj.Sex,
                Religious=obj.Religious,
                MartialStatus=obj.MartialStatus,
                MotherTongue=obj.MotherTongue,
                Height=obj.Height,
                Country=obj.Country,
                State=obj.State,
                City=obj.City,
                HighestEducation=obj.HighestEducation,
                Occupation=obj.Occupation,
                AnnualIncome=obj.AnnualIncome,
                ParentMobile=obj.ParentMobile,
                FamilyType=obj.FamilyType,
                FamilyStatus=obj.FamilyStatus,
                ProfilePhoto= obj.ProfilePhoto,
                IsActive = true,
            };

            var DataAdd = await RegistrationDa.Registration(AddObj);
            return new Model.Registration { Id = DataAdd.Id};
        }

        public string Registration(int Id)
        {
            RegistrationDa.Registration(Id);
            return "Succes";
        }

        public UserProfile Registrationuser(string Username)
        {
            var SpecificUser = RegistrationDa.Registrations(Username);
           
            return  new UserProfile()
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
            var AllData = RegistrationDa.Registrations(Id);
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
          var Dat = await RegistrationDa.Registration(UpdateObj,obj.Id);
            return new Update { Id = UpdateObj.Id};
        }

        public IEnumerable<Model.Registration> Registrations()
        {
            var GetAll = RegistrationDa.Registrations();
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
    }
}
