using FoodStuffAPI.Library.DataAccess;
using FoodStuffAPI.Library.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace FoodStuffAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleController : ControllerBase
    {
        private readonly ISaleData _saleData;

        public SaleController(ISaleData saleData)
        {
            _saleData = saleData;
        }

        [AllowAnonymous]
        [HttpPost]
        public void Post(SaleModel sale)
        {
            _saleData.SaveSale(sale);
        }

        //[Authorize(Roles = "Admin")]
        [Authorize]
        [Route("GetSales")]
        [HttpGet]
        public List<SaleModel> GetSales()
        {
            return _saleData.GetSales();
        }
    }
}
