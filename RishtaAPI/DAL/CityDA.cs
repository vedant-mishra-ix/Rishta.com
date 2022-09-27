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
        private readonly CoreDbContext _context;
        public CityDA(CoreDbContext context)
        {
            _context = context;
        }
        public IEnumerable<City> Cities()
        {
            var AllCity = _context.City.ToList();
            return AllCity;
        }
    }
}
