using RishtaAPI.DAL;
using RishtaAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Service
{
    public interface IStateService
    {
        public IEnumerable<State> States();
    }
    public class StateService : IStateService
    {
        private readonly IState StateDa;
        public StateService(IState _StateDa)
        {
            StateDa = _StateDa;
        }
        public IEnumerable<State> States()
        {
            var AllStates = StateDa.States();
            return (from StatesList in AllStates
                    select new State
                    {
                        Id = StatesList.Id,
                        States = StatesList.States
                    }).ToList();
        }
    }
}
