using FoodStuffAPI.Library.Models;
using System.Collections.Generic;

namespace FoodStuffAPI.Library.DataAccess
{
    public interface IProductData
    {
        void DeleteProduct(string item);
        ProductModel GetProductById(int productId);
        List<ProductModel> GetProducts();
        void SaveProduct(ProductModel item);
    }
}