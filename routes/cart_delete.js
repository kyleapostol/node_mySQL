const express = require('express');
const router = express.Router();
const { db } = require('../database/db.js');


//delete from cart
router.delete('/:productID', (req,res) => {
    let productID = req.params.productID;
    let sql = `DELETE FROM cartItems WHERE productID = ${productID}`
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json('deleted product')
    })
})

module.exports = router;