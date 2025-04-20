const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const validateRequest = require('../middleware/validateRequest');
const { body } = require('express-validator');

// Validation for adding menu item
const addMenuItemValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
  body('category').isIn(['Appetizers', 'Main Courses', 'Desserts', 'Drinks']).withMessage('Invalid category'),
];

// Routes
router.get('/', menuController.getMenuItems);
router.get('/:id', menuController.getMenuItemById);
router.post('/', addMenuItemValidation, validateRequest, menuController.addMenuItem);

module.exports = router;