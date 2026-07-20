const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.json({ 
    status: 'Ares Backend Running',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Error:', err));

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});