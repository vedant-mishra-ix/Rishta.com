using RishtaAPI.DAL;
using RishtaAPI.Model;
using System.Collections.Generic;
using System.Linq;

namespace RishtaAPI.Service
{
    public interface ICityService
    {
        public IEnumerable<City> Cities();
    }
    public class CityService : ICityService
    {
        private readonly ICity _service;
        public CityService(ICity service)
        {
            _service = service;
        }
        public IEnumerable<City> Cities()
        {
            var AllCity = _service.Cities();
            return (from CityList in AllCity
                    select new City
                    {
                        Id = CityList.Id,
                        Cities = CityList.Cities,
                        StatesId = CityList.StatesId
                    }).ToList();
        }
    }
}
