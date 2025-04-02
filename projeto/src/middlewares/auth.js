const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Rotas que não requerem autenticação
  const publicRoutes = [
    { method: 'POST', path: '/auth/login' },
    { method: 'POST', path: '/auth/register' }
  ];

  const isPublic = publicRoutes.some(route => 
    req.method === route.method && req.path.startsWith(route.path)
  );

  if (isPublic) return next();

  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};