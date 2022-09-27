using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace RishtaAPI.Entity
{
    public class Chats
    {
        [Key]
        public int Id { get; set; }
        public string Message { get; set; }
        [Required]
        [ForeignKey("Registration")]
        public int SenderId { get; set; }
        public  Registration Registration { get; set; }
        [Required]
        [ForeignKey("RecieverRegistrationId")]
        public int RecieverId { get; set; }
        public  Registration RecieverRegistrationId { get; set; }
        public DateTime SendDateTime { get; set; }
        public DateTime RecieveDateTime { get; set; }


    }
}
