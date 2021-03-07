using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WebEmpleado.Data;

namespace WebEmpleado.Models
{
    public class Employe 
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string FnameS { get; set; }
        [Required]
        public string Position { get; set; }

        [Required]
        public int  Salary { get; set; }

        public Employe()
        {

        }
       
    }
}


