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
    public class MenuController : Controller
    {
        // GET: Menu
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ListMenu()
        {
            ViewModel mymodel = new ViewModel();

            var menudata = LoadMenu();

            List<MenuModel> menus = new List<MenuModel>();

            foreach (var row in menudata)
            {
                menus.Add(new MenuModel
                {
                    Name = row.Name,
                    Description = row.Description,
                    Price = row.Price,
                    Category = row.Category
                });
            }

            var categoriesdata = LoadCategories();

            List<CategoryModel> categorieslist = new List<CategoryModel>();

            foreach (var row in categoriesdata)
            {
                categorieslist.Add(new CategoryModel
                {
                    CategoryBar = row.CategoryBar
                });
            }

            mymodel.Menus = menus;
            mymodel.Categories = categorieslist;

            return View(mymodel);
        }

    }
}