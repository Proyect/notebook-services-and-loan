const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando! 🚀');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

//user routes
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los usuarios
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});
// Crear un nuevo usuario