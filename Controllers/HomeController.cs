namespace ServerSideReactComponents.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    public class HomeController : Controller
    {
        public IActionResult Index(string name)
        {
            return this.View(new Person { Name = name });
        }
    }
}
