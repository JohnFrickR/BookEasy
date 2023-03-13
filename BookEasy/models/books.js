const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    price: {type: Number, min: 1},
    qty: {type: Number, min: 1},
    worthReading: Boolean,
    rating: {type: Number, min: 1, max: 10},
    img: String,
    description: String,
    genre: String 
},{timestamps: true})

const Book = mongoose.model('Book',bookSchema)

module.exports = Book;