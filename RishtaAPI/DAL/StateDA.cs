using RishtaAPI.Data;
using RishtaAPI.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.DAL
{
    public interface IState
    {
        public IEnumerable<State> States();
    }
    public class StateDA : IState
    {
        private readonly CoreDbContext StateDb;
        public StateDA(CoreDbContext _StateDb)
        {
            StateDb = _StateDb;
        }
        public IEnumerable<State> States()
        {
            var AllStates = StateDb.State.ToList();
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
