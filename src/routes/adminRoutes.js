const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/',function(req,res){
    res.render('addbook',{
        nav:[{link:'/books',name:'Books'},
            {link:'./authors',name:'Authors'},
            {link:'/admin',name:'Add Book'}],
            title:'Library',
    
    });

});
adminRouter.get('/add',function(req,res){
    res.send("added new book")
});

module.exports = adminRouter;