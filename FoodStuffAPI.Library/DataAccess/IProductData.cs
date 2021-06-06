using FoodStuffAPI.Library.Models;
using System.Collections.Generic;

namespace FoodStuffAPI.Library.DataAccess
{
    public interface IProductData
    {
        ProductModel GetProductById(int productId);
        List<ProductModel> GetProducts();
    }
}