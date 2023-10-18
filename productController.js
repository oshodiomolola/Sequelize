const { productModel } = require('../model/productModel')

async function getAllProduct(req, res) {
    try {
        const products = await productModel.findAll({})
        if (products) res.status(200).json({ result: 'SUCCESS', size: products.length, products })
    } catch (err) {
        res.status(400).json({ result: 'fail', message: 'something went wrong', err })
    }
}

async function getOneProduct(req, res) {
    try {
        const product = await productModel.findByPk(parseInt(req.params.id))
        res.status(200).json({ result: 'SUCCESS', size: product.length, product })
    } catch (err) {
        res.status(400).json({ result: 'fail', message: 'something went wrong', err })
    }
}
async function createProduct(req, res) {
    try {
        const body = req.body;
        const newProduct = await productModel.create(body)
        if (newProduct) res.status(200).json({ result: 'SUCCESS', size: newProduct.length, newProduct })

    } catch (err) {
        res.status(400).json({ result: 'fail', message: 'something went wrong', err, direction: err.stack })
    }
}

async function updateProduct(req, res) {
    try {
        const toBeUpdated = req.body
        const updated = await productModel.update(toBeUpdated, { where: { id: parseInt(req.params.id) } })
        if (!updated) {
            return res.status(404).json({ message: 'try again' })
        }
        return res.status(200).json({ message: 'successfully updated', updated })
    } catch (err) {
        res.status(500).json({ message: 'something is wrong', err, stack: err.stack })
    }
}

async function deleteProduct(req, res) {
    try {
        const itemToDelete = await productModel.destroy({ where: { id: parseInt(req.params.id) } })
        if (!itemToDelete) {
            return res.status(404).json({ message: 'cannot delete not found item' })
        }
        return res.status(203).end()
    } catch (err) {
        return res.json({ message: 'something is wrong', stack: err.stack, err })
    }
}
module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getOneProduct
}