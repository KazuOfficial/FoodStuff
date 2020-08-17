using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FoodStuffManager.Startup))]
namespace FoodStuffManager
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
