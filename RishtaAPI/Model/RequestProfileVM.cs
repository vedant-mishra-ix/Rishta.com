using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Model
{
    public class RequestProfileVM
    {
        public int RequestId { get; set; }
        public int RegisteredId { get; set; }
        public int RequestCount { get; set; }
        public string RequestUserName { get; set; }
        public string RequestEmail { get; set; }
        public string RequestImage { get; set;}
    }
}
