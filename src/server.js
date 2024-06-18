const express = require('express') //import express
require('dotenv').config();
const path = require('path')
const app = express() // tạo express application
const confiViewEngine = require('./config/viewEngine')
const port = process.env.PORT || 8888 // init port
const connection = require('./config/database')

const webRoutes = require('./routes/web')

confiViewEngine(app);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//khai báo routes
app.use(webRoutes)
//req (request), res(response) là 2 object trong môi trường Node.js




const conn = async () => {
    try {
        await connection();
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch (error) {
        console.log("error connect to DB")
    }
};
conn();

