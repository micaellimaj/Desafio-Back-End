const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Rotas públicas que não requerem autenticação
  const publicRoutes = [
    { method: 'POST', path: '/auth/login' },
    { method: 'POST', path: '/auth/register' }
  ];

  // Verifica se a rota atual é pública
  const isPublic = publicRoutes.some(route =>
    req.method === route.method && req.path.startsWith(route.path)
  );

  if (isPublic) return next();

  // Busca o token no cabeçalho Authorization
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1]; // Esperado formato: "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
  }

  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Armazena os dados do usuário decodificados no request
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido ou expirado.' });
  }
};
