using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace RishtaAPI.Entity
{
    public class ReportProfile
    {
        [Key]
        public int Id { get; set; }
        // one to many
        [ForeignKey("Registration")]
        public int RegisteredId { get; set; }
        public virtual Registration Registration { get; set; }

        public DateTime CreatedDateTime { get; set; }
    }
}
