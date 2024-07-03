const {model} = require('mongoose');

module.exports = model('Plant', {
    name: String,
    type: String,
    age: Number,
    price: Number, 
    description: String,
    image: String
});