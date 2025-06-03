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
