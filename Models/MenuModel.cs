using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodStuffManager.Models
{
    public class MenuModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string Category { get; set; }
    }

    public class OrderModel
    {
        public string Order { get; set; }

        public string Price { get; set; }

        public string Name { get; set; }

        public string Street { get; set; }

        public string Email { get; set; }

        public int Postcode { get; set; }

        public int Number { get; set; }
    }
}