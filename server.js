require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Person = require('./userModal');
const db = require('./db');

const app = express();
const PORT = process.env.PORT;
// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

// Routes
app.get('/api/people', async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});
// console.log(object)
app.post('/api/add/peoples', async (req, res) => {
  const newUser = new Person(req.body);
  try {
    const savedPost = await newUser.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/people/:id', async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(req.params.id);

    if (!deletedPerson) {
      return res.status(404).json({ status: 'error', error: 'Person not found' });
    }

    res.status(200).json({ status: 'success', message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
