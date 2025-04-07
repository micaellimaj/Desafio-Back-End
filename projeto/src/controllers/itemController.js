const { Item, Tag, User } = require('../models');

exports.getAllItems = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const items = await Item.findAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      include: [
        { model: Tag, as: 'tags' },
        { model: User, as: 'users', attributes: { exclude: ['password'] } }
      ]
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id, {
      include: [
        { model: Tag, as: 'tags' },
        { model: User, as: 'users', attributes: { exclude: ['password'] } }
      ]
    });
    if (!item) return res.status(404).json({ error: 'Item não encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createItem = async (req, res) => {
  try {
    const { tags, users, ...itemData } = req.body;

    const item = await Item.create(itemData);

    // Relacionar tags
    if (tags && tags.length) {
      const tagInstances = await Tag.findAll({ where: { id: tags } });
      await item.addTags(tagInstances);
    }

    // Relacionar usuários
    if (users && users.length) {
      const userInstances = await User.findAll({ where: { id: users } });
      await item.addUsers(userInstances);
    }

    const itemWithRelations = await Item.findByPk(item.id, {
      include: ['tags', 'users']
    });

    res.status(201).json(itemWithRelations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { tags, users, ...itemData } = req.body;

    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item não encontrado' });

    await item.update(itemData);

    if (tags) {
      const tagInstances = await Tag.findAll({ where: { id: tags } });
      await item.setTags(tagInstances);
    }

    if (users) {
      const userInstances = await User.findAll({ where: { id: users } });
      await item.setUsers(userInstances);
    }

    const updatedItem = await Item.findByPk(req.params.id, {
      include: ['tags', 'users']
    });

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const deleted = await Item.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Item não encontrado' });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
