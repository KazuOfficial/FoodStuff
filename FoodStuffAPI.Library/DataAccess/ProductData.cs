using FoodStuffAPI.Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodStuffAPI.Library.DataAccess
{
    public class ProductData : IProductData
    {
        private readonly ISqlDataAccess _sql;

        public ProductData(ISqlDataAccess sql)
        {
            _sql = sql;
        }

        public List<ProductModel> GetProducts()
        {
            var output = _sql.LoadData<ProductModel, dynamic>("dbo.spProduct_GetAll", new { }, "FoodStuffDATA");

            return output;
        }

        public ProductModel GetProductById(int productId)
        {
            var output = _sql.LoadData<ProductModel, dynamic>("dbo.spProduct_GetById", new { Id = productId }, "FoodStuffDATA").FirstOrDefault();

            return output;
        }

        public void SaveProduct(ProductModel item)
        {
            _sql.SaveData("dbo.spProduct_Insert", item, "FoodStuffDATA");
        }

        public void DeleteProduct(string item)
        {
            _sql.SaveData("dbo.spProduct_Delete", new { ProductName = item }, "FoodStuffDATA");
        }
    }
}
