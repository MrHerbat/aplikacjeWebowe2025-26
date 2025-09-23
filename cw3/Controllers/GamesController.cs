using Microsoft.AspNetCore.Mvc;

namespace cw3.Controllers
{
    public class GamesController : Controller
    {
        private readonly GamesContext _context;
        public ActionResult Index()
        {
            return View();
        }

    }
}
