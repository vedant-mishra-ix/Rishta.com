using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using RishtaAPI.Controllers.Converters;
using RishtaAPI.DAL;
using RishtaAPI.Data;
using RishtaAPI.Service;


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
            services.AddDbContext<CoreDbContext>(op => op.UseSqlServer(Configuration.GetConnectionString("Database"))); //Add       
            //services.AddControllers().AddJsonOptions(options =>
            //{
            //    options.JsonSerializerOptions.Converters.Add(new DateConverter());
            //});

            services.AddScoped<IState,StateDA>();
            services.AddScoped<ICity,CityDA>();
            services.AddScoped<IRegistration,RegistrationDA>();
            services.AddScoped<IStateService, StateService>();
            services.AddScoped<ICityService,CityService>();
            services.AddScoped<IRegistrationService,RegistrationService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "RishtaAPI v1"));
            }


            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
