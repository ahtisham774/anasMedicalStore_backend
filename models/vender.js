const mongoose = require('mongoose')
var VenderSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String,  },
    phone: { type: String, },
    description: { type: String, },
    picture: { type: String, },
   
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Vender', VenderSchema)