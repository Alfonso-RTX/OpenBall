const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById
} = require('../controllers/producto.controller');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/create/', createProduct);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);

module.exports = router;