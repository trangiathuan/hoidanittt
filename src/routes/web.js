const express = require('express')
const router = express.Router()
// Gọi các hàm ở trong controller để router có thể sử dụng
const { getCreateUser, getListUser, postCreateUser } = require('../controllers/homeController')

router.get('/', getListUser)

router.get('/create-user', getCreateUser)
// Tạo route và gọi hàm ở controller => gửi yêu cầu cho controller xử lý
router.post('/createUser', postCreateUser)

module.exports = router