using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Entity
{
    public class Country
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Countries { get; set; }
    }
}
