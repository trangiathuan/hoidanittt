const connection = require('../config/database')
const User = require('../models/user')

// Chuyển hướng sang trang thêm user
const getCreateUser = (req, res) => {
    return res.render('Home.ejs')
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
    return res.redirect('/')
}
// Lấy đối tượng cần update điền vào phần Edit
const getUpdateUser = async (req, res) => {
    const id = req.params.id;
    //Lấy đối tượng theo id
    let results = await User.findOne({ _id: id })
    return res.render('Edit.ejs', { User: results })
}
// Update user
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.params.id;
    // Câu lện update 1 đối tượng theo id của DB
    await User.updateOne({ _id: id }, { email: email, name: name, city: city })
    return res.redirect('/')
}

// Lấy danh sách user trong DB
const getListUser = async (req, res) => {
    // Lấy tất cả document trong User
    let results = await User.find({})
    return res.render('ListUser.ejs', { listUser: results })
}

// Xuất các hàm để nơi khác có thể sử dụng
module.exports = {
    getCreateUser,
    getListUser,
    postCreateUser,
    getUpdateUser,
    postUpdateUser
}