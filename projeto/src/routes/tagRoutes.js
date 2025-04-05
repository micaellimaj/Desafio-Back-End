const express = require('express');
const router = express.Router();
const { Tag } = require('../models');

// Listagem paginada de tags
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

// Criação de nova tag
router.post('/', async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        res.status(201).json(tag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;