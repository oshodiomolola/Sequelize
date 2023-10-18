const { model } = require('mongoose');
const { productModel } = require('./../models/product')
// create product
const createProduct = async (req, res) => {
    const body = req.body;
    try {
        const products = await productModel.create(body)
        res.status(201).json({ result: "SUCCESS", message: "a new product has been created", product })
    } catch (error) {
        res.status(400).json({ result: "FAIL", message: "an error has occured", stack: error.stack })
    }

}

const getProduct = async (req, res) => {
    try {
        const products = await productModel.find().select('-__v')
        res.status(200).json({ result: "SUCCESS", size: products.length, products })
    } catch (error) {
        res.status(400).json({ result: "FAIL", message: "an error has occured", stack: error.stack })
    }
}


const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await productModel.findById(id).select('-__v')
        if (!product) res.status(404).json({ result: "FAIL", message: "Not found" })
        return res.status(200).json({ result: "SUCCESS", product })
    } catch (error) {
        res.status(500).json({ result: "FAIL", message: "an error has occured", error })
    }
}


const updateProduct = async (req, res) => {

    try {
        const { id } = req.params
        const updatedproduct = await productModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        if (updatedproduct) return res.status(200).json({ result: "SUCCESS", message: "product has been successfully updated", updatedproduct })

    } catch (error) {
        res.status(500).json({ result: "FAIL", message: "an error has occured", error })
    }
}

const deleteProduct = async (req, res) => {

    try {
        const { id } = req.params
        const product = await productModel.findByIdAndDelete(id)
        if (product) return res.status(204).json({ result: "SUCCESS", message: "product has been successfully deleted" })

    } catch (error) {
        res.status(500).json({ result: "FAIL", message: "an error has occured", error })
    }
}
module.exports = {
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
}