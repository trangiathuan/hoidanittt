const connection = require('../config/database')
const User = require('../models/user')


const getCreateUser = (req, res) => {
    return res.render('Home.ejs')
}
// Lấy danh sách user trong DB
const getListUser = async (req, res) => {
    // Lấy tất cả document trong User
    let results = await User.find({})
    return res.render('ListUser.ejs', { listUser: results })
}
// Thêm user vào DB
const postCreateUser = async (req, res) => {
    // req.body.#  # = name của input đã đặt tên
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // Thêm document
    await User.create({
        email: email,
        name: name,
        city: city
    })
    return res.send('Create Success')
}
// Xuất các hàm để nơi khác có thể sử dụng
module.exports = {
    getCreateUser,
    getListUser,
    postCreateUser
}