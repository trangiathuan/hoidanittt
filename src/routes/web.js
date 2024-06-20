const express = require('express')
const router = express.Router()
// Gọi các hàm ở trong controller để router có thể sử dụng
const { getCreateUser, getListUser, postCreateUser, getUpdateUser, postUpdateUser, deleteUser, deleteT } = require('../controllers/homeController')

router.get('/', getListUser)
router.get('/update/:id', getUpdateUser)

router.get('/create-user', getCreateUser)
// Tạo route và gọi hàm ở controller => gửi yêu cầu cho controller xử lý yêu cầu create User
router.post('/createUser', postCreateUser)
// Tạo route và gọi hàm ở controller => gửi yêu cầu cho controller xử lý yêu cầu update User
router.post('/updateUser/:id', postUpdateUser)

router.get('/deleteUser/:id', deleteUser)

router.post('/delete/', deleteT)



module.exports = router