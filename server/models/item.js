const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    description: {
        type: String,
    },
    productImageUrl: {
        type: String,
        require: true
    }

})

const Item = mongoose.model('items', itemSchema);
module.exports = Item;