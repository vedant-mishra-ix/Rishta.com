using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Entity
{
    public class City
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Cities { get; set; }
        
        public int StatesId { get; set; }
    }
}
