using RishtaAPI.Data;
using RishtaAPI.Entity;
using System.Collections.Generic;
using System.Linq;

namespace RishtaAPI.DAL
{
    public interface ICity
    {
        public IEnumerable<City> Cities();
    }
    public class CityDA : ICity
    {
        private readonly CoreDbContext _CityDb;
        public CityDA(CoreDbContext CityDb)
        {
            _CityDb = CityDb;
        }
        public IEnumerable<City> Cities()
        {
            var AllCity = _CityDb.City.ToList();
            return AllCity;
        }
    }
}
