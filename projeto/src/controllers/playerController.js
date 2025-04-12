const { Player, Team } = require('../models');
const Joi = require('joi');

// Validação com Joi
const playerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  teamId: Joi.number().required(),
  image_url: Joi.string().uri().allow(null, '') 
});

// Criação do Jogador
const playerController = {
  async create(req, res) {
    try {
      const { name, teamId, image_url } = req.body;

      const { error } = playerSchema.validate({ name, teamId, image_url });
      if (error) return res.status(400).json({ error: error.details[0].message });

      const player = await Player.create({ name, teamId, image_url: image_url || null });

      return res.status(201).json(player);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao criar jogador', details: err.message });
    }
  },

  // Lista de Jogadores
  async list(req, res) {
    try {
      const players = await Player.findAll({
        include: { model: Team, as: 'team', attributes: ['id', 'name'] }, attributes: ['id', 'name', 'image_url', 'teamId']
      });
      return res.status(200).json(players);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao listar jogadores', details: err.message });
    }
  },

  // Atualização de jogadores

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, teamId, image_url } = req.body;

      const { error } = playerSchema.validate({ name, teamId, image_url });
      if (error) return res.status(400).json({ error: error.details[0].message });

      const player = await Player.findByPk(id);
      if (!player) return res.status(404).json({ error: 'Jogador não encontrado' });

      await player.update({ name, teamId, image_url: image_url || null });

      return res.status(200).json(player);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao atualizar jogador', details: err.message });
    }
  },

// Deleção de jogadores
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
