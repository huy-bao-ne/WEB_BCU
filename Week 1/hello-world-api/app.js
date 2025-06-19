const express = require('express');
const cors = require('cors');
const greetingsRouter = require('./routes/greetings');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('Welcome to Hello World API!');
});

app.use('/api/greetings', greetingsRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
