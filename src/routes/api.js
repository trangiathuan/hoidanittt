const express = require('express')
const routerAPI = express.Router()
const { getUsersAPI } = require('../controllers/apiControllers')

routerAPI.get('/', (req, res) => {
    res.send("Hello worl with apis")
})

routerAPI.get('/users', getUsersAPI)

module.exports = routerAPI