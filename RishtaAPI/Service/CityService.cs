using RishtaAPI.DAL;
using RishtaAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.Service
{
    public interface ICityService
    {
        public IEnumerable<City> Cities();
    }
    public class CityService : ICityService
    {
        private readonly ICity CityDa; 
        public CityService(ICity _CityDa)
        {
            CityDa = _CityDa;
        }
        public IEnumerable<City> Cities()
        {
            var AllCity = CityDa.Cities();
            return (from CityList in AllCity
                    select new City
                    {
                        Id = CityList.Id,
                        Cities = CityList.Cities
                    }).ToList();
        }
    }
}
