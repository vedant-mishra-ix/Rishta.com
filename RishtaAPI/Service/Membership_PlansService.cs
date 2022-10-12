using RishtaAPI.DAL;
using RishtaAPI.Model;
using System.Collections.Generic;
using System.Linq;

namespace RishtaAPI.Service
{
    public interface IMembership_PlansService
    {
        public IEnumerable<Membership_Plans> PlansList();
    }
    public class Membership_PlansService:IMembership_PlansService
    {
        private readonly IMembershipPlans _service;
        public Membership_PlansService(IMembershipPlans service)
        {
            _service = service;
        }

        public IEnumerable<Membership_Plans> PlansList()
        {
            var List = _service.PlansList();
            return (from Plans in List
                    select new Membership_Plans
                    {
                        Id = Plans.Id,
                        PlansName = Plans.PlansName,
                        Benefits =  Plans.Benefits,
                        Price = Plans.Price
                    }).ToList();
        }
    }
}
