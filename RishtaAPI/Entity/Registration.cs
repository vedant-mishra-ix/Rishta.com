 
using System;
using System.ComponentModel.DataAnnotations;

namespace RishtaAPI.Entity
{
    public class Registration
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Mobile { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public DateTime CreatedDateTime { get; set; }
        public DateTime ModifiedDateTime { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Address { get; set; }
        public string Cast { get; set; }
        [Required]
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
    }
}
