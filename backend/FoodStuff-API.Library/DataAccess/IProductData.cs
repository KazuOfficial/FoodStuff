using FoodStuff_API.Library.Models;
using System.Collections.Generic;

namespace FoodStuff_API.Library.DataAccess
{
    public interface IProductData
    {
        ProductModel GetProductById(int productId);
        List<ProductModel> GetProducts();
    }
}