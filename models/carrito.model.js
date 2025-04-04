const mongoose = require('mongoose');

const CarritoSchema = mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    productos: [{
        producto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Producto',
            required: true
        },
        cantidad: {
            type: Number,
            required: true,
            default: 1
        }
    }],
    total: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

const Carrito = mongoose.model('Carrito', CarritoSchema);
module.exports = Carrito;