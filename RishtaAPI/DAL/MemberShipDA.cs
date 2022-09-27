using RishtaAPI.Data;
using RishtaAPI.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


namespace RishtaAPI.DAL
{
    public interface IMembership
    {
        public Task<MemberShip> MemberShips(MemberShip members);
        public IEnumerable<MemberShip> MemberShips();
        public IEnumerable<Model.MemberShipVM> MemberShipsProfile();
        public bool MemberShip(int Id);
    }
    public class MemberShipDA : IMembership
    {
        private readonly CoreDbContext _context;
        public MemberShipDA(CoreDbContext context)
        {
            _context = context;
        }

        public bool MemberShip(int Id)
        {
            var DeleteMemberShip = _context.MemberShip.FirstOrDefault(obj => obj.RegisteredId == Id);
            if(DeleteMemberShip != null)
            {
                _context.MemberShip.Remove(DeleteMemberShip);
                _context.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<MemberShip> MemberShips(MemberShip members)
        {
            var AddMembers = await _context.MemberShip.AddAsync(members);
            _context.SaveChanges();
            return AddMembers.Entity;
        }

        public IEnumerable<MemberShip> MemberShips()
        {
            var MemberShipList = _context.MemberShip.Include(x => x.Membership_Plans).ToList();
            return MemberShipList;
        }

        IEnumerable<Model.MemberShipVM> IMembership.MemberShipsProfile()
        {
            var Data = _context.MemberShip.Include(x => x.Registration);
            var MembersProfiles = Data.Select(x => new Model.MemberShipVM
            {
                Id = x.Registration.Id,
                UserName = x.Registration.UserName,
                Email = x.Registration.Email,
                ProfilePhoto = x.Registration.ProfilePhoto,
                PlanValidity = x.Membership_Plans.PlansName
            }).ToList();
            return MembersProfiles;
        }
    }
}
