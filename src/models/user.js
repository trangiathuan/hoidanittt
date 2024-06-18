const mongoose = require('mongoose')

//Tạo đối tượng
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
});
const User = mongoose.model('user', userSchema);

// Xuất đối tượng để Controller có thể gọi
module.exports = User;