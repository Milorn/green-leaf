const {model} = require('mongoose');

module.exports = model('Order', {
    name: String,
    address: String,
    phone: String,
    items: [Object]
});