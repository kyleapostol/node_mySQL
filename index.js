const express = require('express');
const app  = express();
const cors = require('cors');
const bodyparser = require('body-parser');

const product = require('./routes/product.js');
const postCart = require('./routes/cart_add.js');
const deleteCart = require('./routes/cart_delete.js')

const { dbConnect } = require('./database/db.js');

dbConnect();
app.use(bodyparser.json());
app.use(cors());

app.use('/api/products', product);
app.use('/api/cart', postCart);
app.use('/api/cart', deleteCart);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
