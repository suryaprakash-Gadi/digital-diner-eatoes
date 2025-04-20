const MenuItem = require('../models/mongo/MenuItem');

// Get all menu items (optionally by category)
const getMenuItems = async (req, res, next) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const menuItems = await MenuItem.find(query);
    res.status(200).json(menuItems);
  } catch (error) {
    next(error);
  }
};

// Get single menu item by ID
const getMenuItemById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const menuItem = await MenuItem.findById(id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.status(200).json(menuItem);
  } catch (error) {
    next(error);
  }
};

// (Bonus) Add new menu item
const addMenuItem = async (req, res, next) => {
  try {
    const menuItem = new MenuItem(req.body);
    const savedItem = await menuItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMenuItems,
  getMenuItemById,
  addMenuItem,
};