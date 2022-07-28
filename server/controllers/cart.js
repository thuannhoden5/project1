const Cart = require('../models/cart')
module.exports.updateCart = async (req,res) => {
    let total = 0
    for (let i = 0; i < req.body.items.length; i++){
       total += req.body.items[i].quantity
    }
    const cart = await Cart.findByIdAndUpdate(req.body._id, {
        totalQuantity: total,
        items: req.body.items
    })
    console.log(cart)
    await cart.save();

    
    // let user = await new User({email, password});
    // await user.save();
    // console.log(user);
    // if(!user){
    //     console.log('no');
    //     next();
    // } else {
    //     console.log('oke');
    //     let cart = await new Cart();
    //     await cart.save();
    //     user.cart = cart;
    //     await user.save();
    //     console.log(user);
    //     res.status(201).send({success:1, data: user})
    // }
}