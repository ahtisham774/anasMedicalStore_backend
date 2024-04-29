const Billing = require('../models/billing')
const Product = require('../models/product')

exports.addBilling = async (req, res) => {
    try {
        const {
            phoneNumber,
            products,
            total,
            discount
        } = req.body
        const billing = new Billing({
            phoneNumber,
            products,
            total,
            discount
        })
        await billing.save()
        // update product quantity
        for (let i = 0; i < products.length; i++) {
            const product = await Product.findById(products[i].productId)
            product.quantity = product.quantity - products[i].quantity
            await product.save()
        }
        res.status(201).json({
            message: "Billing added successfully",
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.getAllBillings = async (req, res) => {
    try {
        const billings = await Billing.find()
        res.json(billings)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// get one billing by id
exports.getBillingById = async (req, res) => {
    try {
        const billing = await Billing.findById(req.params.id)
        res.json(billing)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteBill = async (req, res) => {
    try {
        const { id } = req.params
        const billing = await Billing.findByIdAndDelete(id)
        if (!billing) {
            return res.status(404).json({ message: "No bill found" })
        }
        res.json({ message: 'Deleted on server' })
    } catch (err) {
        res.status(400).send(err)

    }
}