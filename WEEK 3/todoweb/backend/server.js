require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 100 },
  completed: { type: Boolean, default: false }
}, {
  timestamps: true
});
const Task = mongoose.model('Task', taskSchema);

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/tasks', async (req, res) => {
  try {
    const { title } = req.body;
    
    if (!title || title.trim() === '') {
      return res.status(400).json({ error: 'Task title is required' });
    }
    
    if (title.length > 100) {
      return res.status(400).json({ error: 'Task title is too long (max 100 characters)' });
    }
    
    const task = new Task({ title: title.trim() });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/tasks/:id', async (req, res) => {
  try {
    const { title } = req.body;
    
    if (title !== undefined) {
      const task = await Task.findByIdAndUpdate(
        req.params.id, 
        { title }, 
        { new: true }
      );
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } else {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      task.completed = !task.completed;
      await task.save();
      res.json(task);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
