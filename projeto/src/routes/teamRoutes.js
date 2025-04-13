const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// POST criar time
router.post('/', teamController.create);

// GET todos os times
router.get('/', teamController.list);

// PUT atualizar time
router.put('/:id', teamController.update);

// DELETE remover time
router.delete('/:id', teamController.delete);

module.exports = router;
