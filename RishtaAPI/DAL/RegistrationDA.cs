using RishtaAPI.Data;
using RishtaAPI.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RishtaAPI.DAL
{
    public interface IRegistration
    {
        public Task<Registration> Registration(Registration obj);
    }
    public class RegistrationDA:IRegistration
    {
        private readonly CoreDbContext RegistrationDb;
        public RegistrationDA(CoreDbContext _RegistrationDb)
        {
            RegistrationDb = _RegistrationDb;
        }

        public async Task<Registration> Registration(Registration obj)
        {
            var AddData = await RegistrationDb.Registration.AddAsync(obj);
            RegistrationDb.SaveChanges();
            return AddData.Entity;
        }
    }
}
