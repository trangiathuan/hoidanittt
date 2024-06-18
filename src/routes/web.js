const express = require('express')
const router = express.Router()
const { getCreateUser, getListUser, postCreateUser } = require('../controllers/homeController')

router.get('/', getListUser)

router.get('/create-user', getCreateUser)

router.post('/createUser', postCreateUser)

module.exports = router