const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const authMiddleware = require('./middlewares/auth');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const tagRoutes = require('./routes/tagRoutes');
const teamRoutes = require('./routes/teamRoutes');
const playerRoutes = require('./routes/playerRoutes');

const app = express();

// Middlewares globais
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para arquivos estáticos (uploads)
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));


// ROTAS PÚBLICAS
app.use('/auth', authRoutes);
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


// MIDDLEWARE DE AUTENTICAÇÃO
app.use(authMiddleware);

// ROTAS PROTEGIDAS

app.use('/users', userRoutes);
app.use('/items', itemRoutes);
app.use('/tags', tagRoutes);
app.use('/teams', teamRoutes);
app.use('/players', playerRoutes);

//
//    ROTA DE TESTE (opcional)
// ============================
// app.get('/', (req, res) => res.send('API funcionando!'));

// TRATAMENTO DE ERROS
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// INICIAR SERVIDOR
module.exports = app;
