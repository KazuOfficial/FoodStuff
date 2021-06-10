using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodStuffAPI.Library.Models
{
    public class SaleModel
    {
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public string EmailAddress { get; set; }
        public DateTime SaleDate { get; set; }
        public double PurchasePrice { get; set; }
    }   
}
