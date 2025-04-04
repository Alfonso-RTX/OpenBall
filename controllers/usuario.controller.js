const Usuario = require('../models/usuario.model');

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findById(id);
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

// Actualizar un usuario por ID
const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

// Eliminar un usuario por ID
const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByIdAndDelete(id);
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
};