const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./src/routes/routes')

var con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'db_img',
    port: 3306
});

con.connect((err) => {
    console.log('connection stabilished');
    if (err){
        console.log('Error connection to db')
    }
})

const port = 3000
app.listen(port, () => console.log(`Server is running on port: ${port}`))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
    req.con = con;
    next();
})

app.use("/data", routes)

module.exports = app;