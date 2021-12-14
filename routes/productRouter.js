// import controller
const productController = require('../controllers/productController') 
const reviewController = require('../controllers/reviewController')

// router
const router = require('express').Router()


// use routers
router.post('/addProduct', productController.upload , productController.addProduct)
router.get('/allProducts', productController.getAllProducts)
router.get('/published', productController.getPublishedProduct)

// review url and controller
router.post('/addReview/:id', reviewController.addReview)
router.get('/allReviews', reviewController.getAllReviews)

// get product Reviews
router.get('/getProductReviews/:id', productController.getProductReviews)

router.get('/:id', productController.getOneProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router