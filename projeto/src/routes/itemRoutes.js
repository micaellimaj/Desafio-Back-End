const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// GET todos os itens
router.get('/', itemController.getAllItems);

// GET item por ID
router.get('/:id', itemController.getItemById);

// POST criar novo item
router.post('/', itemController.createItem);

// PUT atualizar item
router.put('/:id', itemController.updateItem);

// DELETE remover item
router.delete('/:id', itemController.deleteItem);

module.exports = router;
