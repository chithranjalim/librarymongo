const express = require("express");
const authorRouter = express.Router();
const bookdata = require('../model/bookdata');
function router(nav)
    {

// var authors = [
//     {
//         title: "joseph barbera",
//         books: " Tom and Jerry, The Flintstones, Yogi Bear, Scooby-Doo, Top Cat, The Smurfs, Huckleberry Hound",
//         img:"JBarbera.jpg"

//     },
    
//     {
//         title: "j k rowling",
//         books: "Harry Potter series , Cormoran Strike series",
//         img:"J.K._Rowling.jpg"

//     },
    
//     {
//         title: "basheer",
//         books:"Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu",
//         img:"basheer.jpg"

//     }
// ]

authorRouter.get('/',function(req,res)
                {
                                
                    bookdata.find()
                    .then(function(authors){
                    res.render("author",
                    {
                        nav,
                        title:'Library',
                        authors
                    });
                });
            });
authorRouter.get('/:id',function(req,res)
                                {
                                    const id = req.params.id;
                                    bookdata.findOne({_id:id})
                                    .then(function(author){
                                    res.render("auth",
                                    {
                                        nav,
                                        title:'Library',
                                        author
                                    });
                                });
                            }); 

authorRouter.post('/update',function(req,res){  
         
                                var id=req.body.id;
                                var title=req.body.title;
                                var author=req.body.author;
                                var image=req.body.image;
                                    //bookdata.updateOne({_id:id},{$set:{title:title}});
        bookdata.update({_id:id},{$set:{title:title,author:author,image:image}},
                                    {new:true},function(err,update)
                                                           {
                                                           if(err) {
                                                            
                                                                console.log("err");
                                                               
                                                                    }
                                                          //res.json(update);
                                                          //console.log("success")   
                                                          //.then(function(authors){
                                                         res.redirect("/authors");
                                                        //   {
                                                        //     nav,
                                                        //     title:'Library',
                                                        //   authors
                                                        // });
                                                            
                                                        // });
                                                        })
                                                  });
                                                
                                  
                                                    
authorRouter.get('/delete/:id',function(req, res)
                                         {  
                                            var id = req.params.id;
                                            bookdata.findOneAndRemove({_id: id})
                                                
                                                    .then(function(books){
                                                    res.redirect("/authors");
                                                });
                                            });
                                        
                return authorRouter;
                                    }             
module.exports =router;                               