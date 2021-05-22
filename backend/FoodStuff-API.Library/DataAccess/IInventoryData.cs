using FoodStuff_API.Library.Models;
using System.Collections.Generic;

namespace FoodStuff_API.Library.DataAccess
{
    public interface IInventoryData
    {
        List<InventoryModel> GetInventory();
        void SaveInventoryRecord(InventoryModel item);
    }
}