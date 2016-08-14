using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(www.nhaonhatrang.com.Startup))]
namespace www.nhaonhatrang.com
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
