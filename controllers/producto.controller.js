const Producto = require('../models/producto.model');

// Obtener todos los productos
const getAllProducts = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findById(id);
        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
    try {
        const producto = await Producto.create(req.body);
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

// Actualizar un producto por ID
const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByIdAndUpdate(id, req.body, { new: true });
        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

// Eliminar un producto por ID
const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByIdAndDelete(id);
        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById
};