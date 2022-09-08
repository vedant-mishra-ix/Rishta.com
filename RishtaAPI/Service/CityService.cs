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
        private readonly ICity _CityDa;
        public CityService(ICity CityDa)
        {
            _CityDa = CityDa;
        }
        public IEnumerable<City> Cities()
        {
            var AllCity = _CityDa.Cities();
            return (from CityList in AllCity
                    select new City
                    {
                        Id = CityList.Id,
                        Cities = CityList.Cities
                    }).ToList();
        }
    }
}
