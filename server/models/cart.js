const mongoose = require('mongoose');

const {Schema} = mongoose;

const CartSchema = new Schema({
    items:[{

        id: String,
        price: Number,
        quantity: Number,
        totalPrice: Number,
        name: String
    }
    ],
    totalQuantity: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('cart', CartSchema)