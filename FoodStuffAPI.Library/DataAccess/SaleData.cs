using FoodStuffAPI.Library.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodStuffAPI.Library.DataAccess
{
    public class SaleData : ISaleData
    {
        private readonly ISqlDataAccess _sql;

        public SaleData(ISqlDataAccess sql)
        {
            _sql = sql;
        }

        public void SaveSale(SaleModel sale)
        {

            try
            {
                _sql.StartTransaction("FoodStuffDATA");

                _sql.SaveDataInTransaction("dbo.spSale_Insert", sale);

                _sql.CommitTransaction();
            }
            catch
            {
                _sql.RollbackTransaction();
                throw;
            }
        }

        public List<SaleModel> GetSales()
        {
            var output = _sql.LoadData<SaleModel, dynamic>("dbo.spSale_GetAll", new { }, "FoodStuffDATA");

            return output;
        }
    }
}
