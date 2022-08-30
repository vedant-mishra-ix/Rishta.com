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
        public IEnumerable<Model.Registration> Registrations();
        public string RegistrationUpdate(Model.Registration obj);
        public String Registration(int Id);
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
            };

            var DataAdd = await RegistrationDa.Registration(AddObj);
            return new Model.Registration { Id = DataAdd.Id};
        }

        public string Registration(int Id)
        {
            RegistrationDa.Registration(Id);
            return "Succes";
        }

        public IEnumerable<Model.Registration> Registrations()
        {
            var AllData = RegistrationDa.Registrations();
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

                    }).ToList();
        }

        public string RegistrationUpdate(Model.Registration obj)
        {
            var UpdateObj = new Entity.Registration
            {
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
        };
           RegistrationDa.Registration(UpdateObj,Convert.ToInt32( obj.Id));
            return "Success";
        }

    }
}
