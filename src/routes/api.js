const express = require('express')
const routerAPI = express.Router()
const { getUsersAPI, postCreateUserAPI } = require('../controllers/apiControllers')


routerAPI.get('/users', getUsersAPI)

routerAPI.post('/users', postCreateUserAPI)

module.exports = routerAPI