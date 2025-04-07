const { Team } = require('../models');
const Joi = require('joi');

// Validação com Joi
const teamSchema = Joi.object({
  name: Joi.string().min(2).required()
});

const teamController = {
  async create(req, res) {
    try {
      const { error } = teamSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const team = await Team.create(req.body);
      return res.status(201).json(team);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao criar equipe', details: err.message });
    }
  },

  async list(req, res) {
    try {
      const teams = await Team.findAll();
      return res.status(200).json(teams);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao listar equipes', details: err.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { error } = teamSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const team = await Team.findByPk(id);
      if (!team) return res.status(404).json({ error: 'Equipe não encontrada' });

      await team.update(req.body);
      return res.status(200).json(team);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao atualizar equipe', details: err.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const team = await Team.findByPk(id);
      if (!team) return res.status(404).json({ error: 'Equipe não encontrada' });

      await team.destroy();
      return res.status(200).json({ message: 'Equipe deletada com sucesso' });
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao deletar equipe', details: err.message });
    }
  }
};

module.exports = teamController;
