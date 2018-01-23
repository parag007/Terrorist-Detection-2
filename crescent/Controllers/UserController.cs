using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using crescent.Models;
namespace crescent.Controllers
{
    public class UserController : Controller
    {
        
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Crude()
        {
            return View();
        }

        
        public JsonResult GetAllData()
        {
          


            using (crescentEntities db = new crescentEntities())
            {
                List<Document> doc = db.Documents.ToList();
                return Json(doc,JsonRequestBehavior.AllowGet);
            }  
        }

        public JsonResult InsertData(Document document)
        {
            if (document != null)
            {
                using (crescentEntities db = new crescentEntities())
                {
                    db.Documents.Add(document);
                    db.SaveChanges();
                    List<Document> doc = db.Documents.ToList();
                    return Json(doc, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return null;
            }        
        }

        public JsonResult UpdateData(Document docm)
        {
            if (docm != null)
            {
                using (crescentEntities db = new crescentEntities())
                {
                    Document DocUpdate =  db.Documents.Where(i => i.ID == docm.ID).FirstOrDefault();
                    DocUpdate.DocID = docm.DocID;
                    DocUpdate.Source = docm.Source;
                    DocUpdate.Content = docm.Content;
                    DocUpdate.Phone = docm.Phone;
                    DocUpdate.Misc = docm.Misc;
                    DocUpdate.Person = docm.Person;
                    DocUpdate.Location = docm.Location;
                    DocUpdate.Organisation = docm.Organisation;
                    DocUpdate.Money = docm.Money;
                    db.SaveChanges();
                    List<Document> doc = db.Documents.ToList();
                    return Json(doc, JsonRequestBehavior.AllowGet);
                }                  
            }
            else
            {
                return null;
            }

        }

        // retrives a particular Data record
        public JsonResult Get_Data_Id(string Id) 
        {
            using (crescentEntities obj = new crescentEntities())
            {
                int DataId = Convert.ToInt32(Id);
                return Json(obj.Documents.Find(DataId), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult DeleteData(Document docm)
        {
            if (docm != null)
            {
                using (crescentEntities db = new crescentEntities())
                {
                    Document docmDelete = db.Documents.Where(i => i.ID == docm.ID).FirstOrDefault();
                    db.Documents.Remove(docmDelete);
                    db.SaveChanges();
                    List<Document> doc = db.Documents.ToList();
                    return Json(doc, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return null;
            }
        }

        public int LoginResult(UserDetail UD)
        {
            if (UD != null)
            {
                using (crescentEntities db = new crescentEntities())
                {
                    UserDetail udSelect = db.UserDetails.Where(i => i.LoginID == UD.LoginID && i.Password == UD.Password).FirstOrDefault();                     
                    if (udSelect != null)
                    {
                        return 1;
                    }
                    else
                        return 2;
                }
            }
            else
            {
                return 0;
            }
        }
    }
}