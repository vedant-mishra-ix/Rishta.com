﻿using System;
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
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Registration>()
                .HasMany(x => x.senderchat)
                .WithOne(y => y.Registration)
                .OnDelete(DeleteBehavior.NoAction);

            base.OnModelCreating(builder);
        }

        public DbSet<City> City { get; set; }
        public DbSet<State> State { get; set; }
        public DbSet<Registration> Registration { get; set; }
        public DbSet<ReportProfile> ReportProfile { get; set; }
        public DbSet<RequestProfile> RequestProfile { get; set; }
        public DbSet<RequestAccept> RequestAccept { get; set; }
        public DbSet<Membership_Plans> Membership_Plans { get; set; }
        public DbSet<MemberShip> MemberShip { get; set; }
        public DbSet<Country> Country { get; set; }
        public DbSet<Chats> Chats { get; set; }

    }
}
