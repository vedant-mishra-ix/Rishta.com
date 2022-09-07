
using System.ComponentModel.DataAnnotations;

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
