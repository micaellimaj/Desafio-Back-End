const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Teste da rota de autenticação - talvez apague
router.get('/', (req, res) => {
    res.send('Rota de autenticação funcionando!');
});

module.exports = router;
