using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Entity
{
    public class ReportProfile
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        // one to many
        [ForeignKey("Registration")]
        public int RegisteredId { get; set; }
        public Registration Registration { get; set; }

        public DateTime CreatedDateTime { get; set; }
    }
}
