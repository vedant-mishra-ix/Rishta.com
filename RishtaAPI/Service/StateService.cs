using RishtaAPI.DAL;
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
        private readonly IState _service;
        public StateService(IState service)
        {
            _service = service;
        }
        public IEnumerable<State> States()
        {
            var AllStates = _service.States();
            return (from StatesList in AllStates
                    select new State
                    {
                        Id = StatesList.Id,
                        States = StatesList.States,
                        CountryId = StatesList.CountryId
                    }).ToList();
        }
    }
}
