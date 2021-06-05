using FoodStuff_API.Library.Models;
using System.Collections.Generic;

namespace FoodStuff_API.Library.DataAccess
{
    public interface IUserData
    {
        void CreateUser(UserModel user);
        List<UserModel> GetUserById(string Id);
    }
}