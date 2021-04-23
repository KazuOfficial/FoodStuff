using FoodStuffDesktop.Models;
using System.Threading.Tasks;

namespace FoodStuffDesktop.Helpers
{
    public interface IAPIHelper
    {
        Task<AuthenticatedUser> Authenticate(string username, string password);
    }
}