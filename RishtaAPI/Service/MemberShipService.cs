
using RishtaAPI.DAL;
using RishtaAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Service
{
    public interface IMembershipService
    {
        public Task<MemberShip> MemberShips(MemberShip members);
        public IEnumerable<MemberShipVM> MemberShips();
        public IEnumerable<MemberShipVM> MemberShipsProfiles();
        public bool MemberShip(int id);
    }
    public class MemberShipService:IMembershipService
    {
        private readonly IMembership _service;
        public MemberShipService(IMembership service)
        {
            _service = service;
        }

        public IEnumerable<MemberShipVM> MemberShipsProfiles()
        {
            var MembersData = _service.MemberShipsProfile();
            return (from AllData in MembersData
                    select new MemberShipVM
                    {
                       Id = AllData.Id,
                       UserName = AllData.UserName,
                       Email = AllData.Email,
                       ProfilePhoto = AllData.ProfilePhoto,
                       PlanValidity = AllData.PlanValidity
                    }).ToList();
        }

        public async Task<MemberShip> MemberShips(MemberShip members)
        {
            var AddMembers = new Entity.MemberShip
            {
                PlansId = members.PlansId,
                RegisteredId = members.RegisteredId,
                CreatedDateTime = DateTime.Now,
            };

            await _service.MemberShips(AddMembers);
            return new MemberShip { Id = AddMembers.Id};
        }

        public IEnumerable<MemberShipVM> MemberShips()
        {
            var MembersList = _service.MemberShips();
            return (from AllList in MembersList
                    select new MemberShipVM
                    {
                        Id = AllList.RegisteredId,
                        PlanValidity = AllList.Membership_Plans.PlansName
                    }
                   ).ToList();
        }

        public bool MemberShip(int id)
        {
            var DeleteMembershipProfile = _service.MemberShip(id);
            if(DeleteMembershipProfile)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
