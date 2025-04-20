const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db.config');
const Customer = require('./Customer');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Customer,
      key: 'id',
    },
  },
  items: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'orders',
  timestamps: true,
});

Order.belongsTo(Customer, { foreignKey: 'customerId' });

module.exports = Order;