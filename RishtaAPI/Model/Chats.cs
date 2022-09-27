using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Model
{
    public class Chats
    {
        public int Id { get; set; }
        public string Message { get; set; }
        [Required]
        public int SenderId { get; set; }
        [Required]
        public int RecieverId { get; set; }
        public DateTime SendDateTime { get; set; }
        public DateTime RecieveDateTime { get; set; }
    }
}
