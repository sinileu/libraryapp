const express = require('express');
const authorsRouter = express.Router();

var authors =[
    {
        name: 'Yann Martel',
        desc: 'Yann Martel is a Canadian author best known for the Man Booker Prize-winning novel Life of Pi, an international bestseller published in more than 50 territories.',
        img: "yann.jpg"
    },
    {   
        name: 'Stephen King',
        img: "stephen.jpg",
        desc: 'Stephen Edwin King is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. '
    },
    {   
        name: 'Paulo Coelho',
        img: "paulo.jpg",
        desc: 'Paulo Coelho de Souza is a Brazilian lyricist and novelist, best known for his novel The Alchemist.'
    },
    {   
        name: 'J.R.R. Tolkien',
        img: "tolkien.jpg",
        desc: 'John Ronald Reuel Tolkien CBE FRSL was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings.'
    },
    {   
        name: 'Leo Tolstoy',
        img: "tolstoy.jpg",
        desc: 'Count Lev Nikolayevich Tolstoy, usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time.'
    }
    ]
    authorsRouter.get('/',function(req,res){
        res.render('authors',{
            nav:[{link:'./books',name:'Books'},
            {link:'/authors',name:'Authors'},
            {link:'/addmin',name:'Add Author'}],
            title:'Library',
            authors 
        });
        });
        authorsRouter.get('/:ig',function(req,res){
            const ig = req.params.ig
            res.render('author',{
                nav:[{link:'./books',name:'Books'},
                {link:'/authors',name:'Authors'}],
                title:'Library',
                author : authors[ig]
            });
        });

        module.exports = authorsRouter;