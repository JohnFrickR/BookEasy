// Define Dependencies 
const express = require('express')
const router = express.Router()
const Book = require('../models/books.js')

// ROUTES below -> INDUCES MODEL

// INDEX 
router.get('/',(req,res)=>{
   Book.find({},(err,foundBook) =>{
    if(err){console.log(err.message)}
    res.render('index.ejs',{
        books: foundBook
    })
   })
})

// NEW 
router.get('/new',(req,res)=>{
    res.render('new.ejs')
})
// DELETE

// UPDATE 

// CREATE 
router.post('/',(req,res)=>{
    //this below will tell us if the checked box is true or false, which is important for other routes.
    if(req.body.worthReading === 'on'){
        req.body.worthReading = true
    } else {
        req.body.worthReading = false
    }
    // this below creates the book with the create function and posting it to req.body 
    Book.create(req.body, (err, createdBook)=>{
        console.log(createdBook,'Created Book')
        res.redirect('/books')
    });
});
// EDIT

// SHOW 
router.get('/:id',(req,res)=>{
    Book.findById(req.params.id,(err,foundBook) =>{
        if(err){console.log(err.message)}
        res.render('show.ejs',{
            book: foundBook
        })
    })
})

module.exports = router