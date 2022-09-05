using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Model
{
    public class UserProfile
    {
        public int? Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public DateTime ModifiedDateTime { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string Cast { get; set; }
        public string Sex { get; set; }
        public string Religious { get; set; }
        public string MartialStatus { get; set; }
        public string MotherTongue { get; set; }
        public string Height { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string HighestEducation { get; set; }
        public string Occupation { get; set; }
        public string AnnualIncome { get; set; }
        public string ParentMobile { get; set; }
        public string FamilyType { get; set; }
        public string FamilyStatus { get; set; }
        public string ProfilePhoto { get; set; }
        public IFormFile Files { get; set; }
    }
}
