using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodStuffAPI.Library.Models
{
    public class SaleDBModel
    {
        public int Id { get; set; }
        public DateTime SaleDate { get; set; } = DateTime.UtcNow;
        public decimal Total { get; set; }
    }
}
