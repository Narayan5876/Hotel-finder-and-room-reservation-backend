const mongoose = require('mongoose')
const roombook = mongoose.model('roombook',{
    // User vhaneko model banako. 
        name: {
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