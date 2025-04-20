const express = require('express');
const { connectMongoDB, connectPostgres, sequelize } = require('./config/db.config');
const cors = require('./config/cors.config');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');
const errorHandler = require('./middleware/errorHandler');
const { log } = require('./utils/logger');

const app = express();

// Middleware
app.use(cors);
app.use(express.json());

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

// Error Handling
errorHandler(app);

// Sync PostgreSQL models and start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to databases
    await connectMongoDB();
    await connectPostgres();
    await sequelize.sync({ force: false }); // Sync PostgreSQL models
    log('Databases connected and synced');

    // Start server
    app.listen(PORT, () => {
      log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    log(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();