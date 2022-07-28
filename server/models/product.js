const mongoose = require('mongoose');

const {Schema} = mongoose;

const ImageSchema = new Schema({
    url: String,
    filename:String
});

ImageSchema.virtual('thumbnail').get(function(){
    return this.url.replace('/upload','/upload/w_200')
})
const opts = {
    toJSON: {
        virtuals: true
    }
}

const ProductSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    discount: String,
    amount: Number,
    images: [String],
    category: {
        type: String,
        enum: ['Men','Women', 'Kid']
    }, 
    type: String,
    newPrice: Number
},
{
    timestamps: true
})
module.exports = mongoose.model('Product', ProductSchema)