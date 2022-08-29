﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Model
{
    public class City
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Cities { get; set; }
    }
}
