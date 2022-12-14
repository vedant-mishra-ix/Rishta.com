
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using RishtaAPI.Authentication;
using RishtaAPI.DAL;
using RishtaAPI.Data;
using RishtaAPI.Model;
using RishtaAPI.Service;
using System.Text;

namespace RishtaAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "RishtaAPI", Version = "v1" });
            });
            services.AddDbContext<CoreDbContextNew>(op => op.UseSqlServer(Configuration.GetConnectionString("Database"))); //Add      
            // for mail setting
            services.Configure<MailSettings>(Configuration.GetSection("MailSettings"));

            services.AddScoped<ICountry, CountryDA>();
            services.AddScoped<IState, StateDA>();
            services.AddScoped<ICity, CityDA>();
            services.AddScoped<IRegistration, RegistrationDA>();
            services.AddScoped<IReportProfile, ReportProfileDA>();
            services.AddScoped<IRequestProfile, RequestProfileDA>();
            services.AddScoped<IRequestAccept, RequestAcceptDA>();
            services.AddScoped<IMembershipPlans, Membership_PlansDA>();
            services.AddScoped<IMembership, MemberShipDA>();
            services.AddScoped<IChats, ChatsDA>();
            services.AddScoped<ICountryService, CountryService>();
            services.AddScoped<IStateService, StateService>();
            services.AddScoped<ICityService, CityService>();
            services.AddScoped<IRegistrationService, RegistrationService>();
            services.AddScoped<IReportProfileService, ReportProfileService>();
            services.AddScoped<IRequestProfileService, RequestProfileService>();
            services.AddScoped<IRequestAcceptService, RequestAcceptService>();
            services.AddScoped<IMembership_PlansService, Membership_PlansService>();
            services.AddScoped<IMembershipService, MemberShipService>();
            services.AddScoped<IChatsService, ChatsService>();
            services.AddTransient<IMailService, MailService>();

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<CoreDbContextNew>()
                .AddDefaultTokenProviders();
            // new application user
            // Adding Authentication  
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })

            // Adding Jwt Bearer  
            .AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidAudience = Configuration["JWT:ValidAudience"],
                    ValidIssuer = Configuration["JWT:ValidIssuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]))
                };
            });

            services.AddSwaggerGen(swagger =>
            {

                swagger.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "Enter 'Bearer' [space] and then your valid token in the text input below.\r\n\r\nExample: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\"",
                });
                swagger.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                          new OpenApiSecurityScheme
                            {
                                Reference = new OpenApiReference
                                {
                                    Type = ReferenceType.SecurityScheme,
                                    Id = "Bearer"
                                }
                            },
                            new string[] {}
                    }
                });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseSwagger();
            app.UseSwaggerUI(c => { 
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "RishtaAPI v1");
                c.RoutePrefix = string.Empty;
            });

            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());
            app.UseStaticFiles();
            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
