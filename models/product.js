const mongoose = require('mongoose')
const product = mongoose.model('Product',{
    // User vhaneko model banako. 
        product_name: {
            type: String
        },
        product_type:{
            type : String
        },
        product_code:{
            type : String
        },
        price:{
            type : String
        }
    })
    module.exports = product