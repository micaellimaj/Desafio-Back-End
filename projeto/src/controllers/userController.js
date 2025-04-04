// src/controllers/userController.js
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const users = await User.findAll({ 
      limit: parseInt(limit),
      offset: parseInt(offset),
      attributes: { exclude: ['password'] } // Não retorna a senha
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};