﻿using FoodStuffAPI.Library.DataAccess;
using FoodStuffAPI.Library.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodStuffAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class ProductController : ControllerBase
    {
        private readonly IProductData _productData;

        public ProductController(IProductData productData)
        {
            _productData = productData;
        }

        [HttpGet]
        public List<ProductModel> Get()
        {
            return _productData.GetProducts();
        }

        //[Authorize(Roles = "Admin")]
        [HttpPost]
        [Route("AddProduct")]
        public void AddProduct(ProductModel item)
        {
            _productData.SaveProduct(item);
        }

        //[Authorize(Roles = "Admin")]
        [HttpPost]
        [Route("DeleteProduct")]
        public void DeleteProduct(string productName)
        {
            _productData.DeleteProduct(productName);
        }
    }
}
