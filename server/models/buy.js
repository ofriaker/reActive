const mongoose = require('mongoose');
const buySchema = new mongoose.Schema({

    _id: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    products: {
        type: Array,
    },
})

const Buy = mongoose.model('buys', buySchema);
module.exports = Buy;