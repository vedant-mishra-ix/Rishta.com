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
        private readonly CoreDbContextNew _context;
        public CountryDA(CoreDbContextNew context)
        {
            _context = context;
        }
        public IEnumerable<Country> Countries()
        {
            var AllCountry = _context.Rishta_Country.ToList();
            return AllCountry;
        }
    }
}
