using FoodStuff_API.Library.Models;
using System.Collections.Generic;

namespace FoodStuff_API.Library.DataAccess
{
    public interface ISaleData
    {
        List<SaleReportModel> GetSaleReport();
        decimal GetTaxRate();
        void SaveSale(SaleModel saleInfo, string cashierId);
    }
}