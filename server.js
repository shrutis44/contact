require('dotenv').config();
const express = require('express');
const cors =require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());

app.use(express.json());
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
    console.log('Server running on port 5000');
});