const express = require('express');
const router = express.Router();
const {
    getCartByUser,
    createCart,
    addProductToCart,
    removeProductFromCart
} = require('../controllers/carrito.controller');

router.get('/:usuarioId', getCartByUser);
router.post('/', createCart);
router.post('/add', addProductToCart);
router.post('/remove', removeProductFromCart);

module.exports = router;