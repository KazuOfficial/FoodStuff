using FoodStuffAPI.Library.Models;
using System.Collections.Generic;

namespace FoodStuffAPI.Library.DataAccess
{
    public interface IUserData
    {
        void CreateUser(UserModel user);
        List<UserModel> GetUserById(string Id);
    }
}