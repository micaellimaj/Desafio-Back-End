const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET todos os usuários
router.get('/', userController.getAllUsers);

// GET usuário por ID
router.get('/:id', userController.getUserById);

// POST criar novo usuário
router.post('/', userController.createUser);

// PUT atualizar usuário
router.put('/:id', userController.updateUser);

// DELETE remover usuário
router.delete('/:id', userController.deleteUser);

module.exports = router;
