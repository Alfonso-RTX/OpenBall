const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} = require('../controllers/usuario.controller');

// Obtener todos los usuarios
router.get('/', getAllUsers);

// Obtener un usuario por ID
router.get('/:id', getUserById);

// Crear un nuevo usuario
router.post('/', createUser);

// Actualizar un usuario por ID
router.put('/:id', updateUserById);

// Eliminar un usuario por ID
router.delete('/:id', deleteUserById);

module.exports = router;