const express = require("express");
const addbooksRouter = express.Router();
const bookdata = require('../model/bookdata');
function router(nav)
    {
addbooksRouter.get('/',function(req,res)
                {
                    res.render("addbooks",
                    {
                        nav,
                        title:'Library',
                        
                    });
               
addbooksRouter.get('/add',function(req,res)
                {
                   var item={
                                     title:req.query.title,
                                     author:req.query.author,
                                     genre:req.query.genre,
                                     bookno:req.query.bookno,
                                     image:req.query.image
                           }
                           var book = bookdata(item);
                           book.save();
                           res.redirect('/books');
                            });
                    });
    return addbooksRouter;
                            }
                        
module.exports =router; 