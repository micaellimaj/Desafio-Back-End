const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const upload = require('../middlewares/upload'); // Upload com multer

router.post('/', upload.single('image'), playerController.create);
router.get('/', playerController.list);
router.put('/:id', upload.single('image'), playerController.update);
router.delete('/:id', playerController.delete);

module.exports = router;
