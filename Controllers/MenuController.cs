using FoodStuffManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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
            List<MenuModel> menu = new List<MenuModel>();

            menu.Add(new MenuModel { Name = "Stopiątka", Description = "Pieczarki, boczek, salami, szynka, kurczak", Price = 25.99 });
            menu.Add(new MenuModel { Name = "Margherita", Description = "Ser i tyle", Price = 16.99 });
            menu.Add(new MenuModel { Name = "Relax", Description = "Szynka, boczek, sos śmietanowy", Price = 22.99 });
            menu.Add(new MenuModel { Name = "Amerykańska", Description = "Salami, szynka, kurczak", Price = 25.99 });
            menu.Add(new MenuModel { Name = "Meksykańska", Description = "Sos śmietanowy, ser", Price = 30.99 });
            menu.Add(new MenuModel { Name = "Polska", Description = "Szynka,  sos śmietanowy", Price = 24.99 });
            menu.Add(new MenuModel { Name = "Świętokrzyska", Description = "Pieczarki, kurczak", Price = 28.99 });
            menu.Add(new MenuModel { Name = "Od szwagra", Description = "Ser, sos pomidorowy", Price = 32.99 });
            menu.Add(new MenuModel { Name = "Jak u babki", Description = "Szynka, boczek", Price = 21.99 });
            menu.Add(new MenuModel { Name = "Kubańska", Description = "Papaje, kurczak, ser", Price = 34.99 });
            menu.Add(new MenuModel { Name = "Hiszpańska", Description = "Ananas, oliwki, sos pomidorowy", Price = 31.99 });

            return View(menu);
        }
    }
}