using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebEmpleado.Models
{
    public class EmployeDbConext : DbContext
    {
        public EmployeDbConext(DbContextOptions<EmployeDbConext> options) : base(options)
        {


        }
        public DbSet<Employe> Employe { get; set; }
        
    }
}
