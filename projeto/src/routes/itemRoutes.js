// src/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const itemController = require('../controllers/itemController');
const authMiddleware = require('../middlewares/auth');

// Aplica autenticação JWT em todas as rotas
router.use(authMiddleware);

// Rotas CRUD
router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

// Rota de upload específica
router.post('/:id/upload', upload.single('image'), async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    
    // Remove imagem anterior se existir
    if (item.image_url) {
      const oldImagePath = path.join(__dirname, '..', item.image_url);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }
    
    item.image_url = `/uploads/${req.file.filename}`;
    await item.save();
    
    res.json({
      ...item.toJSON(),
      image_url: `${process.env.BASE_URL || ''}${item.image_url}`
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;