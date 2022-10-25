const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require("cors")
const userRouter = require('./routes/user')
const authRouter = require("./routes/auth")
const productRouter = require("./routes/product")
const orderRouter = require("./routes/order")
const cartRouter = require("./routes/cart")
const stripeRouter = require("./routes/stripe")


dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('DB connection is working'))
.catch((err) => console.log(err))

app.use(cors())
app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.use('/api/carts', cartRouter)
app.use('/api/checkout', stripeRouter)

app.listen(process.env.PORT || 5000, () => {
    console.log('backy is working')
})