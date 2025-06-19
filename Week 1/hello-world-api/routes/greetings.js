const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/dataUtils');

router.get('/', (req, res) => {
  const greetings = readData();
  res.json(greetings);
});

router.get('/:id', (req, res) => {
  const greetings = readData();
  const greeting = greetings.find(g => g.id == req.params.id);
  if (!greeting) return res.status(404).json({ error: 'Greeting not found' });
  res.json(greeting);
});

router.post('/', (req, res) => {
  const greetings = readData();
  const { language, greeting } = req.body;
  const newGreeting = {
    id: greetings.length + 1,
    language,
    greeting
  };
  greetings.push(newGreeting);
  writeData(greetings);
  res.status(201).json(newGreeting);
});

router.put('/:id', (req, res) => {
  const greetings = readData();
  const index = greetings.findIndex(g => g.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });

  greetings[index] = { ...greetings[index], ...req.body };
  writeData(greetings);
  res.json(greetings[index]);
});

router.delete('/:id', (req, res) => {
  let greetings = readData();
  const filtered = greetings.filter(g => g.id != req.params.id);
  if (filtered.length === greetings.length)
    return res.status(404).json({ error: 'Not found' });

  writeData(filtered);
  res.json({ message: 'Deleted' });
});

module.exports = router;
