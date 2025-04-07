require('dotenv').config(); // <- Certifique-se de que isso está no topo!

const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

// Sincroniza os modelos com o banco de dados
sequelize.sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      console.log(`Banco de dados SQLite em: ${sequelize.options.storage || 'não especificado'}`);
    });
  })
  .catch(err => {
    console.error('Falha ao iniciar o servidor:', err);
  });
