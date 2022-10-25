const router = require("express").Router();
const stripe = require("stripe")('sk_test_51LvfOMGUYVibWiwZzNhBtY28Dcu5wDnHXBpzVOsqhvTGHX16uCW6C7D0OK1PyeSpI7wmDG64dXIKFXgtQQjbTkiU000dcZOdKv');

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes)
            }
        },

    )
    
    

})

module.exports = router;