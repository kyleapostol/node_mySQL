const express = require('express');
const router = express.Router();
const { db } = require('../database/db.js')

router.get('/',(req,res) => {
    let sql =  `SELECT * FROM products`;

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
});

router.get('/:productID',(req, res) => {
    let  productID = req.params.productID;
    let sql = `SELECT products.id, products.price, products.color, products.shortdescription, products.name, 
    GROUP_CONCAT(images.image) AS images 
    FROM products 
    JOIN images 
      ON products.id = images.product_id 
    WHERE products.id = ${productID}
    GROUP BY products.id`
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
    
    // let sql = "SELECT `price` FROM `products` where products.id = {$id}"
});

module.exports = router;