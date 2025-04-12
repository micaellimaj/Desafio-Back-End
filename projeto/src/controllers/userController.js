const { User } = require('../models');

// Retornar todos os usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const users = await User.findAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      attributes: { exclude: ['password'] }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retornar usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }
    });
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar novo usuario
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const userData = user.toJSON();
    delete userData.password;
    res.status(201).json(userData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Atualizar usuario
exports.updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Usuário não encontrado' });

    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deletar usuario
exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: 'Usuário não encontrado' });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
