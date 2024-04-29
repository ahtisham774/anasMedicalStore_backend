const mongoose = require('mongoose')

const BillingSchema = new mongoose.Schema({
    phoneNumber:{
        type:String, 
    },
    products:[
        {
            productName:{
                type: String,
            },
            quantity:{
                type:Number
            },
            price:{
                type:Number
            }

        }
    ],
    total:{
        type:Number
    },
    discount:{
        type: Number,
        default:0,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Billing', BillingSchema)