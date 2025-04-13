const { Team, TeamUser, User } = require('../models');
const Joi = require('joi');

// Validação com Joi
const teamSchema = Joi.object({
  name: Joi.string().min(2).required()
});

// Criação de times
const teamController = {
  async create(req, res) {
    try {
      const { error } = teamSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const userId = req.user?.id || req.body.user_id; // req.user se estiver autenticado
      if (!userId) return res.status(400).json({ error: 'ID do usuário é obrigatório' });

      const team = await Team.create({ name: req.body.name });

      await TeamUser.create({
        team_id: team.id,
        user_id: userId,
        relation_type: 'CREATOR'
      });

      return res.status(201).json({
        id: team.id,
        name: team.name
      });
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao criar equipe', details: err.message });
    }
  },

  // Lista de Times
  async list(req, res) {
    try {
      const teams = await Team.findAll({
        attributes: ['id', 'name'],
        include: {
          model: User,
          as: 'users',
          attributes: ['id', 'username'],
          through: { attributes: ['relation_type'] }
        }
      });
      return res.status(200).json(teams);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao listar equipes', details: err.message });
    }
  },

  // Atualização de Times
  async update(req, res) {
    try {
      const { id } = req.params;
      const { error } = teamSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const team = await Team.findByPk(id);
      if (!team) return res.status(404).json({ error: 'Equipe não encontrada' });

      await team.update(req.body);
      return res.status(200).json({ id: team.id, name: team.name });
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao atualizar equipe', details: err.message });
    }
  },

  // Deleção de Times
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
