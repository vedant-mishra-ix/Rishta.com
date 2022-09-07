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
        private readonly CoreDbContext CityDb;
        public CityDA(CoreDbContext _CityDb)
        {
            CityDb = _CityDb;
        }
        public IEnumerable<City> Cities()
        {
            var AllCity = CityDb.City.ToList();
            return AllCity;
        }
    }
}
