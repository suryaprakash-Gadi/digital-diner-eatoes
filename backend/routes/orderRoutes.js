const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const validateRequest = require('../middleware/validateRequest');
const { body } = require('express-validator');

// Validation for creating order
const createOrderValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('phoneNumber').notEmpty().withMessage('Phone number is required'),
  body('cartItems').isArray({ min: 1 }).withMessage('Cart items must be a non-empty array'),
  body('cartItems.*.price').isFloat({ min: 0 }).withMessage('Item price must be a positive number'),
  body('cartItems.*.quantity').isInt({ min: 1 }).withMessage('Item quantity must be at least 1'),
];

// Routes
router.post('/', createOrderValidation, validateRequest, orderController.createOrder);
router.get('/:phoneNumber', orderController.getOrdersByPhone);

module.exports = router;