using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Model
{
    public class RequestProfile
    {
        public int Id { get; set; }
        public int RequestId { get; set; }
        // one to many
        public int RegisteredId { get; set; }
    }
}
