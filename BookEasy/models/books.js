const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    price: {type: Number, min: 1},
    qty: {type: Number, min: 1},
    worthReading: Boolean,
    rating: Number,
    img: String,
    description: String,
    genre: String,
    link: String 
},{timestamps: true})

const Book = mongoose.model('Book',bookSchema)

module.exports = Book;