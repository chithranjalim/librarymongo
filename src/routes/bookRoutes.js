const express = require("express");
const bookRouter = express.Router();
const bookdata = require('../model/bookdata');
function router(nav)
    {
        

// var books = [
//     {
//         title: "tom and jerry",
//         author: "joseph barbera",
//         genre:"cartoon",
//         img:"tom.jpg"

//     },
    
//     {
//         title: "harry potter",
//         author: "j k rowling",
//         genre:"fiction",
//         img:"harry.jpg"

//     },
    
//     {
//         title: "pathuayude aadu",
//         author: "basheer",
//         genre:"novel",
//         img:"basheer.jpg"

//     }
// ]

bookRouter.get('/',function(req,res)
                {
                    bookdata.find()
                    .then(function(books){
                    res.render("books",
                    {
                        nav,
                        title:'Library',
                        books
                    });
                });
            });

bookRouter.get('/:id',function(req,res)
                                {
                                    var id = req.params.id;
                                    bookdata.findOne({_id:id})
                                    .then(function(book){
                                    res.render("book",
                                    {
                                        nav,
                                        title:'Library',
                                        book
                                    });
                                });
                            });
                            
bookRouter.post('/update',function(req,res){            

var id=req.body.id;
var title=req.body.title;
var author=req.body.author;
var genre=req.body.genre;
var bookno=req.body.bookno;
var image=req.body.image;

                                  
                                    
                                    
    //bookdata.updateOne({_id:id},{$set:{title:title}});
    bookdata.findOneAndUpdate({_id:id},{$set:{title:title,author:author,bookno:bookno}},
                           {new:true},function(err,update)
                           {
                           if(err) {
                            
                                console.log("err");
                                
                                    }
                          //res.json(update);
                         res.redirect("/books"); 
                            
                         });
                  });

  
                    
bookRouter.get('/delete/:id',function(req, res)
         {  
            var id = req.params.id;
            bookdata.findOneAndRemove({_id: id})
                
                    .then(function(books){
                    res.redirect("/books");
                });
            });
  
                                return bookRouter;
                            }
                        
module.exports =router;                               