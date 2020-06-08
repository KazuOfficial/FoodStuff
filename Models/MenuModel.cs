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
    public class ShopModel
    {
        public string Name { get; set; }
        public double Price { get; set; }
    }
}