﻿using FoodStuffAPI.Data;
using FoodStuffAPI.Library.DataAccess;
using FoodStuffAPI.Library.Models;
using FoodStuffAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace FoodStuffAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IUserData _userData;
        private readonly ILogger<UserController> _logger;

        public UserController(ApplicationDbContext context, UserManager<IdentityUser> userManager, IUserData userData, ILogger<UserController> logger)
        {
            _context = context;
            _userManager = userManager;
            _userData = userData;
            _logger = logger;
        }

        public record UserRegistrationModel(string FirstName, string LastName, string EmailAddress, string Password);

        [Authorize]
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register(UserRegistrationModel user)
        {
            if (ModelState.IsValid)
            {
                var existingUser = await _userManager.FindByEmailAsync(user.EmailAddress);
                if (existingUser is null)
                {
                    IdentityUser newUser = new()
                    {
                        Email = user.EmailAddress,
                        EmailConfirmed = true,
                        UserName = user.EmailAddress
                    };

                    IdentityResult result = await _userManager.CreateAsync(newUser, user.Password);

                    if (result.Succeeded)
                    {
                        return Ok();
                    }
                }
            }

            return BadRequest();
        }

        [Authorize]
        [HttpGet]
        [Route("GetAllUsers")]
        public List<ApplicationUserModel> GetAllUsers()
        {
            List<ApplicationUserModel> output = new List<ApplicationUserModel>();

            var users = _context.Users.ToList();
            //var userRoles = from ur in _context.UserRoles
            //                join r in _context.Roles on ur.RoleId equals r.Id
            //                select new { ur.UserId, ur.RoleId, r.Name };

            foreach (var user in users)
            {
                ApplicationUserModel u = new ApplicationUserModel
                {
                    Id = user.Id,
                    Email = user.Email
                };

                //u.Roles = userRoles.Where(x => x.UserId == u.Id).ToDictionary(key => key.RoleId, val => val.Name);

                //foreach (var r in user.Roles)
                //{
                //    u.Roles.Add(r.RoleId, roles.Where(x => x.Id == r.RoleId).First().Name);
                //}

                output.Add(u);
            }

            return output;
        }

        //    //[Authorize(Roles = "Admin")]
        //    [HttpGet]
        //    [Route("GetAllRoles")]
        //    public Dictionary<string, string> GetAllRoles()
        //    {
        //        var roles = _context.Roles.ToDictionary(x => x.Id, x => x.Name);

        //        return roles;
        //    }

        //    //[Authorize(Roles = "Admin")]
        //    [HttpPost]
        //    [Route("AddRole")]
        //    public async Task AddRole(UserRolePairModel pairing)
        //    {
        //        string loggedInUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        //        var user = await _userManager.FindByIdAsync(pairing.UserId);

        //        _logger.LogInformation("Admin {Admin} added user {User} to role {Role}", loggedInUserId, user.Id, pairing.RoleName);

        //        await _userManager.AddToRoleAsync(user, pairing.RoleName);
        //    }

        //    //[Authorize(Roles = "Admin")]
        //    [HttpPost]
        //    [Route("RemoveRole")]
        //    public async Task RemoveRole(UserRolePairModel pairing)
        //    {
        //        string loggedInUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        //        var user = await _userManager.FindByIdAsync(pairing.UserId);

        //        _logger.LogInformation("Admin {Admin} removed user {User} from role {Role}", loggedInUserId, user.Id, pairing.RoleName);

        //        await _userManager.RemoveFromRoleAsync(user, pairing.RoleName);
        //    }
        //}
    }
}
