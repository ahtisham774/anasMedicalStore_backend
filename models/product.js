const mongoose = require('mongoose')
var ProductSchema = new mongoose.Schema({
    additionalNotes
        :
        { type: String, },
    costPrice
        :
        { type: Number, },
    lowStock
        :
        { type: Number, },
    name
        :
        { type: String, },
    preferredVendor
        :
        { type: String, default: "Anas" },
    quantity
        :
        { type: Number, },
    sellingPrice
        :
        { type: Number, },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', ProductSchema)