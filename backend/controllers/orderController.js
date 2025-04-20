const Customer = require('../models/postgres/Customer');
const Order = require('../models/postgres/Order');
// Create a new order
const createOrder = async (req, res, next) => {
  try {
    const { name, phoneNumber, cartItems } = req.body;

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Find or create customer
    let customer = await Customer.findOne({ where: { phoneNumber } });
    if (!customer) {
      customer = await Customer.create({ name, phoneNumber });
    }

    // Create order
    const order = await Order.create({
      customerId: customer.id,
      items: cartItems,
      totalPrice,
    });

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    next(error);
  }
};

// Get orders by phone number
const getOrdersByPhone = async (req, res, next) => {
  try {
    const { phoneNumber } = req.params;
    const customer = await Customer.findOne({ where: { phoneNumber } });
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    const orders = await Order.findAll({ where: { customerId: customer.id } });
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  getOrdersByPhone,
};