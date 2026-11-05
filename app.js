require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const poliRoutes = require('./routes/poliRoutes');
const pasienRoutes = require('./routes/pasienRoutes');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST']
}));

app.use('/poli', poliRoutes);
app.use('/pasien', pasienRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});