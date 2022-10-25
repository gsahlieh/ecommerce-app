const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')
const CryptoJS = require("crypto-js");
const Cart = require('../models/Cart');

const router = require('express').Router();


//  Create cart
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Product(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err)
    }
})



// Updating cart using JWT
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err);
    }
})

// Delete cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted bro")
    } catch(err) {
        res.status(500).json(err)
    }
})


// // Get user cart
router.get("/find/:userid", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne(req.params.userid)
        res.status(200).json(cart)
    } catch(err) {
        res.status(500).json(err)
    }
})

// Get all

router.get("/", verifyTokenAndAdmin, async (req,res) => {
    try{
        const carts = await Cart.find()
        res.status(200),json(carts)
    }catch(e){
        res.status(500).json(err)
    }
})


module.exports = router;