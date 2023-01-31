const mongoose = require('mongoose');
const buySchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    products: [{
        productId: String,
        quantity: Number
    }],
    totalPrice: {
        type: String,
        require: true
    }
    // _id: {
    //     type: String,
    //     require: true
    // }
})

const Buy = mongoose.model('buys', buySchema);
module.exports = Buy;