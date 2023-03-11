// Define Dependencies 
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('./models/books.js');
const booksController = require('./controllers/books.js');

// connect to database 
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Error/Successess 
const db = mongoose.connection
    db.on('error', (err)=> console.log(`${err.message} MongoDB Not Running!`));
    db.on('connected', ()=> console.log('mongo connected'));
    db.on('disconnected', ()=> console.log('mongo disconnected'));

// MIDDLEWARE 
    app.use(express.json());
        app.use(express.urlencoded({extended: true}));
        app.use(express.static('public')); 
        app.use(methodOverride('_method'));
        app.use('/books',booksController);
        //app.use('/', Controller);

// PORT 
    const PORT = process.env.PORT;
    app.listen(PORT, ()=>{
        console.log(`listening on port ${PORT}`);
    });
