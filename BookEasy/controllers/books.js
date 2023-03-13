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
        });
   });
});

// NEW 
router.get('/new',(req,res)=>{
    res.render('new.ejs')
});

// DELETE
router.delete('/:id', (req, res) => {
	Book.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
		// findByIdAndDelete will delete a document with a given id 
		if(err) {
			console.log(err)
			res.send(err)
		} else {
			// redirect to the index page if the delete is successful 
			console.log(deletedProduct)
			res.redirect('/books')
		};
	});
});

// UPDATE 
router.put('/:id', (req, res) => {
	if(req.body.worthReading === 'on'){ 
		req.body.worthReading = true
	} else { 
		req.body.worthReading = false
	}
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true,}, 
	(err,updatedBook) => {
		if(err) {
			console.log(err)
			res.send(err)
		} else {
			console.log(updatedBook)
			res.redirect('/books')
		};
	});
});
router.put('/:id/buy', (req, res) => {
    // res.send('I hit this route')
	Book.findByIdAndUpdate(req.params.id,req.body, { new: true,}, 
	(err,updatedBook) => {
		if(err) {
			console.log(err)
			res.send(err)
		} else {
            updatedProduct.qty -= 1
            updatedProduct.save()
			console.log(updatedBook)
			res.redirect('/books')
		};
	});
});

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
router.get('/:id/edit',(req,res)=>{
    Book.findById(req.params.id,(err, foundBook)=>{
        if(err){
            console.log(err)
            res.send(err)
        } else {
            res.render('edit.ejs',{
                book: foundBook
            });
        };
    });
});
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