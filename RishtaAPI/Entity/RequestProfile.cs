using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Entity
{
    public class RequestProfile
    {
        [Key]
        public int Id { get; set; }
        public int RequestId { get; set; }
        // one to many
        [ForeignKey("Registration")]
        public int RegisteredId { get; set; }
        public virtual Registration Registration { get; set; }
        public DateTime CreatedDateTime { get; set; }
    }
}
