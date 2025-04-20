const cors = require('cors');

const corsOptions = {
  origin: ['https://minidigitaldiner.netlify.app', 'http://localhost:3000'], // ✅ Allow both dev and production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};


module.exports = cors(corsOptions);