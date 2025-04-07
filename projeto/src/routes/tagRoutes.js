const express = require('express');
const router = express.Router();
const { Tag } = require('../models');

// Listar todas as tags (paginadas)
router.get('/', async (req, res) => {
    const { limit = 10, offset = 0 } = req.query;
    try {
        const tags = await Tag.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset)
        });
        res.json(tags);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obter uma tag por ID
router.get('/:id', async (req, res) => {
    try {
        const tag = await Tag.findByPk(req.params.id);
        if (!tag) return res.status(404).json({ error: 'Tag não encontrada' });
        res.json(tag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Criar uma nova tag
router.post('/', async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        res.status(201).json(tag);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Atualizar uma tag existente
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Tag.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) return res.status(404).json({ error: 'Tag não encontrada' });
        const updatedTag = await Tag.findByPk(req.params.id);
        res.json(updatedTag);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Deletar uma tag
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Tag.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) return res.status(404).json({ error: 'Tag não encontrada' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
