using FoodStuff.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FoodStuff.Controllers
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
            List<MenuModel> menu = new List<MenuModel>();

            menu.Add(new MenuModel { Name = "Stopiątka", Description = "Salami, kurczak", Price = 16.99 });

            return View(menu);
        }
    }
}