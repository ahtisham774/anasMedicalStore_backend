const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    companyName: { type: String, },
    Location: { type: String, },
   
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)