using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartCity.Models
{
    public class CityContext : DbContext
    {

        public CityContext()
        {
           
        }
       
        //public DbSet <CLASS> _name {get; set; }

    }
}
