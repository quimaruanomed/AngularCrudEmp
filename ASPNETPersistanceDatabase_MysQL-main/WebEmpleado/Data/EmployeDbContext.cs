using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebEmpleado.Models;

namespace WebEmpleado.Data
{
    public class EmployeDbContext :DbContext
    {
        
    public virtual DbSet<Employe> Employe { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder
                .UseMySql("server=127.0.0.1;port=3306;user=root;database=Empleados")
                .UseLoggerFactory(LoggerFactory.Create(b => b
                    .AddConsole()
                    .AddFilter(level => level <= LogLevel.Information)))
                .EnableSensitiveDataLogging()
                .EnableDetailedErrors();
        }
       
    }
}
    

