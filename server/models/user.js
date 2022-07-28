const mongoose = require('mongoose')

const {Schema} = mongoose;

const UserSchema = ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    address: {
        type: String
    },
    role: {
        require: true,
        type: String,
        enum: ['buyers', 'admin'],
        default: 'buyers'
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }
})

module.exports = mongoose.model('user', UserSchema)