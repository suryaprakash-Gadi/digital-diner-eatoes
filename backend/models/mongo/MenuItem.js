// const mongoose = require('mongoose');

// const menuItemSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//   },
//   price: {
//     type: Number,
//     required: true,
//     min: 0,
//   },
//   category: {
//     type: String,
//     enum: ['Appetizers', 'Main Courses', 'Desserts', 'Drinks'],
//     required: true,
//   },
//   available: {
//     type: Boolean,
//     default: true,
//   },
// });

// module.exports = mongoose.model('MenuItem', menuItemSchema);

const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    enum: ['Appetizers', 'Main Courses', 'Desserts', 'Drinks'],
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String, // This can be a URL or base64 string
    required: false,
  },
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
