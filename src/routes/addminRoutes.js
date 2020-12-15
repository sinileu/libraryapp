const express = require('express');
const addminRouter = express.Router();

addminRouter.get('/',function(req,res){
    res.render('addauthor',{
        nav:[{link:'/books',name:'Books'},
            {link:'./authors',name:'Authors'},
            {link:'/addmin',name:'Add Author'}],
            title:'Library',
    
    });

});
addminRouter.get('/add',function(req,res){
    res.send("added new author")
});

module.exports = addminRouter;