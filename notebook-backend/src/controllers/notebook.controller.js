const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = async (req, res) => {
  const notebooks = await prisma.notebook.findMany();
  res.json(notebooks);
};

exports.create = async (req, res) => {
  const { marca, modelo, numeroSerie, idHardware, estado, observacion } = req.body;

  try {
    const newNotebook = await prisma.notebook.create({
      data: { marca, modelo, numeroSerie, idHardware, estado, observacion },
    });
    res.status(201).json(newNotebook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updated = await prisma.notebook.update({
      where: { id: parseInt(id) },
      data,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.notebook.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Notebook eliminada' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
