

using System.ComponentModel.DataAnnotations;

namespace RishtaAPI.Model
{
    public class ReportProfile
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int RegisteredId { get; set; }
    }
}
