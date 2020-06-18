using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodStuffManager.Models
{
    public class RestaurantModel
    {
        public string Name { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string OpenHour { get; set; }
        public string CloseHour { get; set; }
        public string Href1 { get; set; }
        public string Href2 { get; set; }
        public string Classes { get; set; }
    }
}