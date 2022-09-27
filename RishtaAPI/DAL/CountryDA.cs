using RishtaAPI.Data;
using RishtaAPI.Entity;
using System.Collections.Generic;
using System.Linq;

namespace RishtaAPI.DAL
{
    public interface ICountry
    {
        public IEnumerable<Country> Countries();
    }
    public class CountryDA:ICountry
    {
        private readonly CoreDbContext _context;
        public CountryDA(CoreDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Country> Countries()
        {
            var AllCountry = _context.Country.ToList();
            return AllCountry;
        }
    }
}
