using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using RishtaAPI.Authentication;
using RishtaAPI.Entity;

#nullable disable

namespace RishtaAPI.Data
{
    public partial class CoreDbContext : IdentityDbContext<ApplicationUser>
    {

        public CoreDbContext(DbContextOptions<CoreDbContext> options)
            : base(options)
        {
        }

        public DbSet<City> City { get; set; }
        public DbSet<State> State { get; set; }
        public DbSet<Registration> Registration { get; set; }
        public DbSet<ReportProfile> ReportProfile { get; set; }
        public DbSet<RequestProfile> RequestProfile { get; set; }

    }
}
