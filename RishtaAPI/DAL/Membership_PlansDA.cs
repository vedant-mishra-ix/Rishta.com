using RishtaAPI.Data;
using RishtaAPI.Entity;
using System.Collections.Generic;
using System.Linq;

namespace RishtaAPI.DAL
{
    public interface IMembershipPlans
    {
        public IEnumerable<Membership_Plans> PlansList();
    }
    public class Membership_PlansDA:IMembershipPlans
    {
        private readonly CoreDbContext _context;
        public Membership_PlansDA(CoreDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Membership_Plans> PlansList()
        {
            var List = _context.Membership_Plans.ToList();
            if (List != null)
            {
                return List;
            }
            else
            {
                return null;
            }
        }
    }
}
