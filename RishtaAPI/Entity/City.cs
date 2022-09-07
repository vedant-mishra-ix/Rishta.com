
using System.ComponentModel.DataAnnotations;


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
