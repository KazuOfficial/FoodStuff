using FoodStuffDesktop.Library.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FoodStuffDesktop.Library.API
{
    public interface IProductEndpoint
    {
        Task<List<ProductModel>> GetAll();
    }
}