// Import 'dotenv' để sử dụng biến môi trường tại ENV
require('dotenv').config()
const mongoose = require('mongoose')


// check kết nối mongoDB
const dbState = [
    {
        value: 0,
        label: "Disconnected"
    },
    {
        value: 1,
        label: "Connected"
    },
    {
        value: 2,
        label: "Connecting"
    },
    {
        value: 3,
        label: "Disconnecting"
    }
];
//Kết nối MongoDB
const connection = async () => {
    const options = {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME

    }
    await mongoose.connect(process.env.DB_HOST, options);
    //Check connect DB
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value === state).label, "to db"); // connected to db
}
module.exports = connection;



// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//     password: process.env.DB_PASSWORD
// });