using FoodStuffManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataLibrary;
using static DataLibrary.Logic.MenuProcessor;

namespace FoodStuffManager.Controllers
{
    public class MenuController : Controller
    {
        // GET: Menu
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ListMenu()
        {
            var data = LoadMenu();
            List<MenuModel> menus = new List<MenuModel>();

            foreach (var row in data)
            {
                menus.Add(new MenuModel
                {
                    Name = row.Name,
                    Description = row.Description,
                    Price = row.Price,
                    Category = row.Category
                });
            }

            List<MenuModel> order = new List<MenuModel>();
            order.Add(new MenuModel
            {

            });

            return View(menus);
        }
    }
}