using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Model
{
    public class MemberShip
    {
        public int Id { get; set; }
        [Required]
        public int PlansId { get; set; }
        [Required]
        public int RegisteredId { get; set; }
        public DateTime CreatedDateTime { get; set; }
    }
}
