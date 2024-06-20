const express = require('express') //import express
const app = express() // tạo express application
const confiViewEngine = require('./config/viewEngine')
require('dotenv').config();
const connection = require('./config/database')
const fileUpload = require('express-fileupload');
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const port = process.env.PORT || 8888

// default options
app.use(fileUpload());

confiViewEngine(app);
// Convert data to json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//khai báo routes
app.use(webRoutes)
app.use('/v1/api', apiRoutes)

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

