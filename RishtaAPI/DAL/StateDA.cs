using RishtaAPI.Data;
using RishtaAPI.Entity;
using System.Collections.Generic;
using System.Linq;

namespace RishtaAPI.DAL
{
    public interface IState
    {
        public IEnumerable<State> States();
    }
    public class StateDA : IState
    {
        private readonly CoreDbContextNew _context;
        public StateDA(CoreDbContextNew context)
        {
            _context = context;
        }
        public IEnumerable<State> States()
        {
            var AllStates = _context.Rishta_State.ToList();
            if(AllStates != null)
            {
                return AllStates;
            }
            else
            {
                return null;
            }
        }
    }
}
