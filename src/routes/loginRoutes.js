const express = require('express');
const loginRouter = express.Router();

loginRouter.get('/',function(req,res){
    res.render('login',{
        nav:[{link:'/books',name:'Books'},
            {link:'./authors',name:'Authors'},
            // {link:'/login',name:'Login'},
            {link:'/signup',name:'Signup'}],
            title:'Library',
    
    });

});

// loginRouter.get('/login',function(req,res){
//     res.send("login successfully")
// });

module.exports = loginRouter;