const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tagRoutes = require('./routes/tagRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas públicas (autenticação)
app.use('/auth', require('./routes/authRoutes'));

// Middleware de autenticação JWT
app.use(require('./middlewares/auth'));

// Rotas protegidas
app.use('/users', require('./routes/userRoutes'));
app.use('/items', require('./routes/itemRoutes'));
app.use('/tags', require('./routes/tagRoutes'));

// Rota para arquivos estáticos (uploads)
app.use('/uploads', express.static('uploads'));

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

module.exports = app;