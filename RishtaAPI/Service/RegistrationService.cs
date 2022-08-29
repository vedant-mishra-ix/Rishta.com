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
            string uniqueFileName = UploadedFile(obj);
            var AddObj = new Entity.Registration
            {
                UserName=obj.UserName,
                Email=obj.Email,
                Mobile=obj.Mobile,
                DateOfBirth = obj.DateOfBirth,
                CreatedDateTime = DateTime.Now,
                ModifiedDateTime = DateTime.Now,
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
                ProfilePhoto= uniqueFileName,
            };

            var DataAdd = await RegistrationDa.Registration(AddObj);
            return new Model.Registration { Id = DataAdd.Id};
        }
        private string UploadedFile(Model.Registration obj)
        {
            string uniqueFileName = null;

            if (obj.ProfilePhoto != null)
            {
                string uploadsFolder = Path.Combine(webHostEnvironment.WebRootPath, "images");
                uniqueFileName = Guid.NewGuid().ToString() + "_" + obj.ProfilePhoto.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    obj.ProfilePhoto.CopyTo(fileStream);
                }
            }

            return uniqueFileName;
        }
    }
}
