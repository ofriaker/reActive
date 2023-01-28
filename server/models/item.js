const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    imgUrl: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    price: {
        type: String,
        require: true
    },
    rate: {
        type: Number,
        require: true,
        min: 0,
        max: 5
    },
    category: {
        type: String,
        require: true
    },
    flavours: {
        type: [String]
    },
    _id: {
        type: String,
        require: true,
    }

})

const Item = mongoose.model('items', itemSchema);
module.exports = Item;