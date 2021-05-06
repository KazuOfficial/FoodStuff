using FoodStuffDesktop.Library.Models;
using System.Threading.Tasks;

namespace FoodStuffDesktop.Library.API
{
    public interface ISaleEndpoint
    {
        Task PostSale(SaleModel sale);
    }
}