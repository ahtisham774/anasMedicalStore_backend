const Product = require('../models/product')

exports.addProduct = async (req, res) => {
    try {
        const {
            name,
            costPrice,
            sellingPrice,
            quantity,
            lowStock,
            additionalNotes
        } = req.body
        const product = new Product({
            name,
            costPrice,
            sellingPrice,
            quantity,
            lowStock,
            additionalNotes
        })
        await product.save()
        res.status(201).json({
            message: "Product added successfully",
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getStocksInfo = async (req, res) => {
    try {
        const products = await Product.find()
        // get products with low stocks only
        const outOfStocks = products.filter(product => product.quantity == 0)?.length
        const lowStocks = products.filter(product => product.quantity == product.lowStock)?.length
        res.json({
            outOfStocks,
            lowStocks
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.editProduct = async (req, res) => {
    try {
        const {
            _id,
            name,
            costPrice,
            sellingPrice,
            quantity,
            lowStock,
            additionalNotes
        } = req.body
        await Product.findByIdAndUpdate(_id, {
            name,
            costPrice,
            sellingPrice,
            quantity,
            lowStock,
            additionalNotes
        })
        res.json({
            message: "Product updated successfully",
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) return res.status(404).json("No product with this id found")
        res.json({
            message: "Product deleted successfully",
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}