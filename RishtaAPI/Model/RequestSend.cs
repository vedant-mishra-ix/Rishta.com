﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Model
{
    public class RequestSend
    {
        [Required]
        public int RequestId { get; set; }
        [Required]
        public int RegisteredId { get; set; }
    }
}
