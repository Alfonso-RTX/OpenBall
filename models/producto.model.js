const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    }
});

const Producto = mongoose.model('Producto', ProductoSchema);
module.exports = Producto;