using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Entity
{
    public class Membership_Plans
    {
        [Key]
        public int Id { get; set; }
        public string PlansName { get; set; }
        public string Benefits { get; set; }
        public int ProfileVisible { get; set; }
        public string Price { get; set; }
        public ICollection<MemberShip> MemberShips { get; set; }

    }
}
