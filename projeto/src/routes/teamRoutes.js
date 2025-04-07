const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

router.post('/', teamController.create);
router.get('/', teamController.list);
router.put('/:id', teamController.update);
router.delete('/:id', teamController.delete);

module.exports = router;
