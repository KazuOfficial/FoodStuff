using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodStuff.Models
{
    public class MenuModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }

        public double Category { get; set; }
    }
}