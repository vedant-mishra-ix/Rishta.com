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
        private readonly CoreDbContextNew _context;
        public CityDA(CoreDbContextNew context)
        {
            _context = context;
        }
        public IEnumerable<City> Cities()
        {
            var AllCity = _context.Rishta_City.ToList();
            return AllCity;
        }
    }
}
