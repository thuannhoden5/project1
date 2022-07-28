const Product = require('../models/product');

module.exports.index = async(req,res) => {
    const products = await Product.find({});
    console.log("hello");
    console.log(products.images);
    res.status(200).json(products)
};

// module.exports.productDetails = async(req,res) => {
//     const {id, category} = req.params.id;
//     const product = await Product.find({
//         _id: id,
//         category: category
//     })
//     if(!product){
//         res.status(404).send("Not Found")
//     } else {
//         res.status(400).json(product)
//     }
// }

module.exports.createNewProduct = async(req,res, next) => {
    const product = await Product(req.body);
    console.log(req.body);
    await product.save();
    if(!product){

        next();
    } else {
        res.status(201).send({success:1, data: product})
    }
};

module.exports.removeProduct =  async(req,res) => {
    const product = await Product.findByIdAndDelete(req.id);
    await product.save();
   res.send("thanh cong")
}

module.exports.updateProduct = async (req,res) => {
    const product = await Product.findOneAndUpdate(req.id, req.body);
    await product.save();
}