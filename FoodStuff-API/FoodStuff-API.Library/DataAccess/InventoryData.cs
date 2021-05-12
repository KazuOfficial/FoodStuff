﻿using FoodStuff_API.Library.Internal.DataAccess;
using FoodStuff_API.Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodStuff_API.Library.DataAccess
{
    public class InventoryData
    {
        public List<InventoryModel> GetInventory()
        {
            SqlDataAccess sql = new SqlDataAccess();

            var output = sql.LoadData<InventoryModel, dynamic>("dbo.spInventory_GetAll", new { }, "FoodStuffDATA");

            return output;
        }

        public void SaveInventoryRecord(InventoryModel item)
        {
            SqlDataAccess sql = new SqlDataAccess();

            sql.SaveData("dbo.spInventory_Insert", item, "FoodStuffDATA");
        }
    }
}