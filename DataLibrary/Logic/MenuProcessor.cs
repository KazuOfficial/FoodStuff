﻿using DataLibrary.DataAccess;
using DataLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Logic
{
    public static class MenuProcessor
    {
        /*public static int CreateMenu(int menuId, string name, string description, double price, string category)
        {
            MenuModel data = new MenuModel
            {
                Name = name,
                Description = description,
                Price = price,
                Category = category
            };

            string sql @"insert into dbo.Employee (EmployeeId, FirstName, LastName, 
                        values (@Name, @Description, @Price, @Category);";

            return SqlDataAccess.SaveData(sql, data);
        }*/
        public static List<MenuModel> LoadMenu()
        {
            string sql = @"select Id, Name, Description, Price, Category from dbo.Menu;";

            return SqlDataAccess.LoadData<MenuModel>(sql);
        }
    }
}
