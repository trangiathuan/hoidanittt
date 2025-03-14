const Custumer = require('../models/customer')

const createCustomerService = async (customerData) => {
    try {
        let result = await Custumer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return result;
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createCustomerService
}