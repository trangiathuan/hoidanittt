const connection = require('../config/database')
const User = require('../models/user')


const getCreateUser = (req, res) => {
    return res.render('Home.ejs')
}

const getListUser = async (req, res) => {
    let results = await User.find({})
    return res.render('ListUser.ejs', { listUser: results })
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(email, name, city)

    await User.create({
        email: email,
        name: name,
        city: city
    })
    return res.send('Create Success')
}

module.exports = {
    getCreateUser,
    getListUser,
    postCreateUser
}