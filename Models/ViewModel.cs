using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FoodStuffManager.Models
{
    public class ViewModel
    {
        public IEnumerable<MenuModel> Menus { get; set; }
        public IEnumerable<ShopModel> Shops { get; set; }
    }
}