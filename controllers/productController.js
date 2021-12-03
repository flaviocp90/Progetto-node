const res = require('express/lib/response')
const db = require('../models')

//main model

const Product = db.products
const Review = db.reviews

// create product

const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published: false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}

// get all product

const getAllProducts = async (req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}

//get single product

const getOneProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({ where: { id: id } })
    res.status(200).send(product)
}

// update product

const updateProduct = async (req, res) => {
    let id = req.params.id
    const product = await Product.update(req.body, { where: { id: id } })
    res.status(200).send(product)
}

// delete product

const deleteProduct = async (req, res) => {
    await Product.destroy({ where: { id: id }})
    res.status(200).send('Product is deleted')
}

// get published product

const getPublishedProduct = async (req, res) => {
    const products = await Product.findAll({ where: { published: true }}) 
    res.status(200).send(products)
}

module.exports = {
    
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}