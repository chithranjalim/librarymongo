const express = require("express");
const app = new express();

const nav = [
                {link:'/books',name:'Books'},
                {link:'/authors',name:'Authors'},
                {link:'/admin',name:'add books'},
                {link:'/sign',name:'SignUp'},
                {link:'/login',name:'LogIn'},
               
            ]
const bookRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const addbooksRouter = require('./src/routes/addbooksRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',bookRouter);
app.use('/authors',authorRouter);
app.use('/admin',addbooksRouter);
app.use('/sign',signupRouter);
app.use('/login',loginRouter);

app.get('/',function(req,res)
                            {
                                res.render("index",
                                {
                                    nav,
                                    title:'Library'
                                });
                            });

                                          
app.listen(3000);