const { Player, Team } = require('../models');
const Joi = require('joi');

// Validação com Joi
const playerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  teamId: Joi.number().required(),
});

const playerController = {
  async create(req, res) {
    try {
      const { error } = playerSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const image = req.file ? req.file.filename : null;

      const player = await Player.create({
        ...req.body,
        image_url: image ? `/uploads/${image}` : null
      });

      return res.status(201).json(player);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao criar jogador', details: err.message });
    }
  },

  async list(req, res) {
    try {
      const players = await Player.findAll({ include: { model: Team, as: 'team' } });
      return res.status(200).json(players);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao listar jogadores', details: err.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { error } = playerSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const player = await Player.findByPk(id);
      if (!player) return res.status(404).json({ error: 'Jogador não encontrado' });

      const image = req.file ? req.file.filename : player.image_url;

      await player.update({
        ...req.body,
        image_url: image ? `/uploads/${image}` : null
      });

      return res.status(200).json(player);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao atualizar jogador', details: err.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const player = await Player.findByPk(id);
      if (!player) return res.status(404).json({ error: 'Jogador não encontrado' });

      await player.destroy();
      return res.status(200).json({ message: 'Jogador deletado com sucesso' });
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao deletar jogador', details: err.message });
    }
  }
};

module.exports = playerController;
