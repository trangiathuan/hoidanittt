const express = require('express')
const routerAPI = express.Router()
const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileApi, postUploadMultipleFilesAPI } = require('../controllers/apiControllers')
const { postCreatCustomer, postCreatArrayCustomer } = require('../controllers/customerController')

routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', deleteUserAPI)
routerAPI.post('/file', postUploadSingleFileApi)
routerAPI.post('/file', postUploadMultipleFilesAPI)

routerAPI.post('/customers', postCreatCustomer)
routerAPI.post('/customers-many', postCreatArrayCustomer)


module.exports = routerAPI 