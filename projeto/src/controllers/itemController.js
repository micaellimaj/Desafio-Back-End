const { Item, Tag, User } = require('../models');

exports.getAllItems = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const items = await Item.findAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      include: [
        { model: Tag, as: 'tags', attributes: ['id', 'name'] },
        { model: User, as: 'users', attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt'] } }
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
        { model: Tag, as: 'tags', attributes: ['id', 'name'] },
        { model: User, as: 'users', attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt'] } }
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

    // Adiciona a URL completa da imagem, caso tenha sido enviada
    if (req.file) {
      itemData.image_url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    }

    const item = await Item.create(itemData);

    // Relacionar tags
    if (tags && tags.length) {
      const tagInstances = await Tag.findAll({ where: { id: tags } });

      if (tagInstances.length !== tags.length) {
        return res.status(400).json({ error: 'Uma ou mais tags não existem' });
      }

      await item.addTags(tagInstances);
    }

    // Relacionar usuários com relation_type
    if (users && users.length) {
      for (const userObj of users) {
        const user = await User.findByPk(userObj.id);
        if (!user) {
          return res.status(400).json({ error: `Usuário com ID ${userObj.id} não existe` });
        }

        await item.addUser(user, {
          through: { relation_type: userObj.relation_type || 'RESPONSIBLE' }
        });
      }
    }

    const itemWithRelations = await Item.findByPk(item.id, {
      include: [
        { model: Tag, as: 'tags', attributes: ['id', 'name'] },
        { model: User, as: 'users', attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt'] } }
      ]
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

    // Se imagem nova foi enviada, atualiza a URL
    if (req.file) {
      itemData.image_url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    }

    await item.update(itemData);

    if (tags) {
      const tagInstances = await Tag.findAll({ where: { id: tags } });
      if (tagInstances.length !== tags.length) {
        return res.status(400).json({ error: 'Uma ou mais tags não existem' });
      }
      await item.setTags(tagInstances);
    }

    if (users) {
      await item.setUsers([]); // limpa as relações existentes
      for (const userObj of users) {
        const user = await User.findByPk(userObj.id);
        if (!user) {
          return res.status(400).json({ error: `Usuário com ID ${userObj.id} não existe` });
        }

        await item.addUser(user, {
          through: { relation_type: userObj.relation_type || 'RESPONSIBLE' }
        });
      }
    }

    const updatedItem = await Item.findByPk(req.params.id, {
      include: [
        { model: Tag, as: 'tags', attributes: ['id', 'name'] },
        { model: User, as: 'users', attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt'] } }
      ]
    });

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item não encontrado' });

    await item.destroy(); // Isso também respeita os constraints e cascades
    res.status(200).json({ message: 'Item excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

