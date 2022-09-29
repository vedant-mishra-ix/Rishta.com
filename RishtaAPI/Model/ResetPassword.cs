using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Model
{
    public class ResetPassword
    {
        [Required]
        public string UserEmail { get; set; }
    }
}
