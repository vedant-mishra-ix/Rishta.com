
using System.ComponentModel.DataAnnotations;

namespace RishtaAPI.Entity
{
    public class State
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string States { get; set; }
        public int CountryId { get; set; }
    }
}
