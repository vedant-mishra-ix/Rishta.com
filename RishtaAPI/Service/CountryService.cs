using RishtaAPI.DAL;
using RishtaAPI.Model;
using System.Collections.Generic;
using System.Linq;

namespace RishtaAPI.Service
{
    public interface ICountryService
    {
        public IEnumerable<Country> Countries();
    }
    public class CountryService: ICountryService
    {
        private readonly ICountry _service;
        public CountryService(ICountry service)
        {
            _service = service;
        }
        public IEnumerable<Country> Countries()
        {
            var AllCountry = _service.Countries();
            return (from CountryList in AllCountry
                    select new Country
                    {
                        Id = CountryList.Id,
                        Countries = CountryList.Countries,
                    }).ToList();
        }
    }
}
