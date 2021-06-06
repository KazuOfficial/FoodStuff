using FoodStuffAPI.Library.Models;
using System.Collections.Generic;

namespace FoodStuffAPI.Library.DataAccess
{
    public interface ISaleData
    {
        List<SaleReportModel> GetSaleReport();
        void SaveSale(SaleModel saleInfo);
    }
}