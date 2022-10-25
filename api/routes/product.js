const Product = require('../models/Product');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')
const CryptoJS = require("crypto-js")


const router = require('express').Router();


//  Create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err)
    }
})



// Updating product using JWT
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updatedProduct)
    }catch(err){
        res.status(500).json(err);
    }
})

// Delete product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted bro")
    } catch(err) {
        res.status(500).json(err)
    }
})

// Delete all products
router.delete("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.deleteMany()
        res.status(200).json("All Products have been deleted bro")
    } catch(err) {
        res.status(500).json(err)
    }
})


// // Get product
router.get("/find/:id",  async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        const { password, ...others } = product._doc;
        res.status(200).json(others)
    } catch(err) {
        res.status(500).json(err)
    }
})

// // Get all products
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let products;

        if (qNew){
            products = await Product.find().sort({ createdAt: -1}).limit(5);
        }else if(qCategory){
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                }
            })
        }else{
            products = await Product.find();
        }
        res.status(200).json(products)
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router;