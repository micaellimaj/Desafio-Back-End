const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

// Sincroniza o banco de dados e inicia o servidor
sequelize.sync({ force: false }) // altere para true apenas em desenvolvimento para recriar tabelas
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });