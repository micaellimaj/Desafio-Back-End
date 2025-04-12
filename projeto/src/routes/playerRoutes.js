const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const upload = require('../config/multer');

// POST criar novo jogador
router.post('/', playerController.create);

// GET todos os jogadores
router.get('/', playerController.list);

// PUT atualizar jogador
router.put('/:id', playerController.update);

// DELETE remover jogador
router.delete('/:id', playerController.delete);

module.exports = router;
