const express = require('express');
const router = express.Router();
const { db } = require('../database/db.js');


//adding to cart
router.post('/:productID',(req, res) => {
    let  productID = req.params.productID;

    let sql = `INSERT INTO cartItems (productID, count, price, added, updated, cartID)
    VALUES (${productID}, 1, 199, NOW(), NOW(), 1)
    ON DUPLICATE KEY UPDATE count = count + 1`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json('added product');
    })
});

router.get('/', (req,res) => {
    let sql = `SELECT * FROM products 
    INNER JOIN cartItems ON products.id = cartItems.productID
    INNER JOIN cart ON cart.id = cartItems.cartID`
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
})

module.exports = router;