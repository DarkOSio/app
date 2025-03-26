const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/submit', require('./routes/submit'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`DarkOS backend running on port ${PORT}`));
