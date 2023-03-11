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

// DELETE

// UPDATE 

// CREATE 

// EDIT

// SHOW 

module.exports = router