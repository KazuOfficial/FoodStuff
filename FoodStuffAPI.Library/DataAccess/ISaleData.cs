using FoodStuffAPI.Library.Models;
using System.Collections.Generic;

namespace FoodStuffAPI.Library.DataAccess
{
    public interface ISaleData
    {
        List<SaleModel> GetSales();
        void SaveSale(SaleModel sale);
    }
}