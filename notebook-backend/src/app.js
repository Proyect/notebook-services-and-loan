const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const notebookRoutes = require('./routes/notebook.routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/notebooks', notebookRoutes);

module.exports = app;
