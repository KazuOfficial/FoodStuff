using FoodStuffManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataLibrary;
using static DataLibrary.Logic.MenuProcessor;
using System.Dynamic;

namespace FoodStuffManager.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var data = LoadRestaurant();

            List<RestaurantModel> restaurants = new List<RestaurantModel>();

            foreach (var row in data)
            {
                restaurants.Add(new RestaurantModel
                {
                    Name = row.Name,
                    City = row.City,
                    Street = row.Street,
                    OpenHour = row.OpenHour,
                    CloseHour = row.CloseHour,
                    Href1 = row.Href1,
                    Href2 = row.Href2,
                    Classes = row.Classes
                });
            }

            return View(restaurants);
        }

        [Authorize(Roles = "Admin")]
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        [Authorize(Roles = "Employee")]
        //[Authorize(Roles = "Employee, Admin")]
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [Authorize]
        public ActionResult Orders()
        {
            return View();
        }
    }
}