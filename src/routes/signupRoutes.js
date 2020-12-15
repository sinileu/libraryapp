const express = require('express');
const signupRouter = express.Router();

signupRouter.get('/',function(req,res){
    res.render('signup',{
        nav:[{link:'/books',name:'Books'},
            {link:'./authors',name:'Authors'},
            {link:'/login',name:'Login'}],
            // {link:'/signup',name:'Signup'}],
            title:'Library',
    
    });

});

// loginRouter.get('/login',function(req,res){
//     res.send("login successfully")
// });

module.exports = signupRouter;