const User = require('../models/user')
const  bcrypt = require('bcryptjs')
const Cart = require('../models/cart')

module.exports.register = async (req,res,next) => {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const {email, password} = req.body
    let user = await new User({email, password});
    await user.save();
    console.log(user);
    if(!user){
        console.log('no');
        next();
    } else {
        console.log('oke');
        let cart = await new Cart();
        await cart.save();
        user.cart = cart;
        await user.save();
        console.log(user);
        res.status(201).send({success:1, data: user})
    }
}

module.exports.login = async(req,res, next) => {
    console.log(req.body);
    const {email, password} = req.body;
    let user = await User.findOne({email});
    console.log(user);
    const a = await bcrypt.compare(password, user.password);
    console.log(a);
    if(!a){
        next();
    } else {
        const cart = await Cart.findById(user.cart);
        console.log(cart);
        res.status(201).send({success:1, data: {user, cart}})
    }
    
}



