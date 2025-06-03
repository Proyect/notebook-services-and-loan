const express = require('express');
const router = express.Router();
const notebookController = require('../controllers/notebook.controller');

// GET all
router.get('/', notebookController.getAll);

// POST
router.post('/', notebookController.create);

// PUT
router.put('/:id', notebookController.update);

// DELETE
router.delete('/:id', notebookController.remove);

module.exports = router;

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post('/notebooks', async (req, res) => {
  try {
    const nuevaNotebook = await prisma.notebook.create({
      data: req.body
    });
    res.status(201).json(nuevaNotebook);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'No se pudo crear la notebook' });
  }
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
