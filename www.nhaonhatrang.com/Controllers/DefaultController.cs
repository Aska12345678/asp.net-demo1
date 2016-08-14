using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace www.nhaonhatrang.com.Controllers
{
    public class DefaultController : Controller
    {
        public ActionResult Home()
        {
            ViewBag.view = "Day la form default";
            return View();
        }

        public ActionResult BanCanHoChungCu()
        {
            ViewBag.view = "Day la view Ban can ho chung cu";
            return View();
        }
    }
}