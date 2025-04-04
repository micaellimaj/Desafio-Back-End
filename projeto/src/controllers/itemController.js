const { Item, Tag, User } = require('../models/User');

exports.getAllItems = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const items = await Item.findAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      include: [
        { model: Tag, as: 'tags' },
        { model: User, as: 'users' }
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
      include: ['tags', 'users']
    });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createItem = async (req, res) => {
  try {
    const { tags, ...itemData } = req.body;
    const item = await Item.create(itemData);
    
    if (tags && tags.length) {
      const tagInstances = await Tag.findAll({ where: { id: tags } });
      await item.addTags(tagInstances);
    }
    
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const [updated] = await Item.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'Item not found' });
    res.json(await Item.findByPk(req.params.id));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const deleted = await Item.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Item not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};