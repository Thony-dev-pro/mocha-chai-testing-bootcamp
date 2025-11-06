const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route simple
app.get('/', (req, res) => {
  res.json({ message: 'API de test Mocha/Chai' });
});

// Route avec paramètre
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id <= 0) {
    return res.status(400).json({ error: 'ID invalide' });
  }
  res.json({ id, name: `Utilisateur ${id}` });
});

// Route POST
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Nom requis' });
  }
  res.status(201).json({ id: 1, name });
});

const server = app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = { app, server };