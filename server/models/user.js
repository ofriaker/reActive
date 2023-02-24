const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    email: {
        type: String,
        require: true
    },
    userName: {
        type: String,
    },
    address: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
})

const User = mongoose.model('users', userSchema);
module.exports = User;