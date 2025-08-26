require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Message Schema
const messageSchema = new mongoose.Schema({
  content: String,
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  room: String,
  timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// Simple JWT auth for socket
function socketAuth(socket, next) {
  const token = socket.handshake.auth?.token;
  if (!token) return next(new Error('Authentication error'));
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = user;
    next();
  } catch {
    next(new Error('Authentication error'));
  }
}

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});
io.use(socketAuth);

io.on('connection', (socket) => {
  console.log('User connected:', socket.user.username);

  socket.on('join', (room) => {
    socket.join(room);
    socket.to(room).emit('user-joined', socket.user.username);
  });

  socket.on('message', async ({ room, content }) => {
    const msg = new Message({ content, sender: socket.user.id, room });
    await msg.save();
    io.to(room).emit('message', {
      content,
      sender: socket.user.username,
      room,
      timestamp: msg.timestamp
    });
  });

  socket.on('typing', (room) => {
    socket.to(room).emit('typing', socket.user.username);
  });

  socket.on('disconnect', () => {
    // Optionally broadcast user left
  });
});

// Get message history for a room
app.get('/api/messages/:room', async (req, res) => {
  const messages = await Message.find({ room: req.params.room }).populate('sender', 'username');
  res.json(messages);
});

server.listen(process.env.PORT || 3002, () => {
  console.log('Chat server running');
});
