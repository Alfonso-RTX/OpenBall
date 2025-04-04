const Carrito = require('../models/carrito.model');
const Producto = require('../models/producto.model');

// Obtener el carrito de un usuario
const getCartByUser = async (req, res) => {
    try {
        const { usuarioId } = req.params;
        const carrito = await Carrito.findOne({ usuario: usuarioId }).populate('productos.producto');
        if (!carrito) return res.status(404).json({ message: 'Carrito no encontrado' });
        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

// Crear un carrito para un usuario
const createCart = async (req, res) => {
    try {
        const { usuarioId } = req.body;
        const carrito = await Carrito.create({ usuario: usuarioId });
        res.status(201).json(carrito);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

// Agregar un producto al carrito
const addProductToCart = async (req, res) => {
    try {
        const { carritoId, productoId, cantidad } = req.body;

        // Verificar si el producto existe
        const producto = await Producto.findById(productoId);
        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });

        // Buscar el carrito
        const carrito = await Carrito.findById(carritoId);
        if (!carrito) return res.status(404).json({ message: 'Carrito no encontrado' });

        // Verificar si el producto ya está en el carrito
        const itemIndex = carrito.productos.findIndex(item => item.producto.toString() === productoId);
        if (itemIndex > -1) {
            carrito.productos[itemIndex].cantidad += cantidad;
        } else {
            carrito.productos.push({ producto: productoId, cantidad });
        }

        // Actualizar el total
        carrito.total += producto.precio * cantidad;
        await carrito.save();

        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

// Eliminar un producto del carrito
const removeProductFromCart = async (req, res) => {
    try {
        const { carritoId, productoId } = req.body;

        // Buscar el carrito
        const carrito = await Carrito.findById(carritoId);
        if (!carrito) return res.status(404).json({ message: 'Carrito no encontrado' });

        // Encontrar el índice del producto en el carrito
        const itemIndex = carrito.productos.findIndex(item => item.producto.toString() === productoId);
        if (itemIndex === -1) return res.status(404).json({ message: 'Producto no encontrado en el carrito' });

        // Calcular el descuento al total
        const producto = await Producto.findById(productoId);
        carrito.total -= producto.precio * carrito.productos[itemIndex].cantidad;

        // Eliminar el producto del carrito
        carrito.productos.splice(itemIndex, 1);
        await carrito.save();

        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

module.exports = {
    getCartByUser,
    createCart,
    addProductToCart,
    removeProductFromCart
};