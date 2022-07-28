const express = require('express');
const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongo');
var module = require('module');
const app = express();
const ExpressError = require('./utils/ExpressError')
const productRouter = require("./routes/product");
const userRouter = require("./routes/user")
const cartRouter = require('./routes/cart')

const dbUrl = 'mongodb://localhost:27017/shop';
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

mongoose.connect(dbUrl);
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.use("/product",productRouter)
app.use("/user", userRouter)
app.use('/cart', cartRouter)


app.all('*', (req,res, next) => {
    next(new ExpressError('Page Not Found', 404))
})
app.use((err,req,res,next) => {
    const {statusCode = 500} = err;
    if(!err.message) err.message = 'Oh No, Something went wrong!'
    res.send({statusCode:0, data: err.message})
})
app.listen(5000, () => {
    console.log("Server running at port 5000");
})

