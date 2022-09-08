﻿using RishtaAPI.DAL;
using RishtaAPI.Model;
using System.Collections.Generic;
using System.Linq;

namespace RishtaAPI.Service
{
    public interface IStateService
    {
        public IEnumerable<State> States();
    }
    public class StateService : IStateService
    {
        private readonly IState _StateDa;
        public StateService(IState StateDa)
        {
            _StateDa = StateDa;
        }
        public IEnumerable<State> States()
        {
            var AllStates = _StateDa.States();
            return (from StatesList in AllStates
                    select new State
                    {
                        Id = StatesList.Id,
                        States = StatesList.States
                    }).ToList();
        }
    }
}