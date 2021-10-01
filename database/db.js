const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host    : process.env.DB_HOST,
    user    : process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

const dbConnect = () => {
    db.connect(err => {
        if(err) {
            console.log('error when connecting to database:', err);
            res.status(503);
            res.send("Internal Server Error");
            setTimeout(dbConnect, 2000);
        }
        
        console.log("Connected to mySQL")
    });


}

module.exports = {
    dbConnect,
    db
};