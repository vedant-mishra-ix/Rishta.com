using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RishtaAPI.Entity
{
    public class MemberShip
    {
        [Key]
        public int Id { get; set; }
        public string Pay { get; set; }
        // one to one
        [ForeignKey("Registration")]
        public int RegisteredId { get; set; }
        public Registration Registration { get; set; }
        public DateTime CreatedDateTime { get; set; }
    }
}
