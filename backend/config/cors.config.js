const cors = require('cors');

const corsOptions = {
  origin: ['your frontend_url', 'http://localhost:3000'], // ✅ Allow both dev and production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};


module.exports = cors(corsOptions);
