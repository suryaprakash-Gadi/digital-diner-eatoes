import axios from 'axios';

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

    export const getMenuItems = () => axios.get(`${API_URL}/menu`);
    export const createOrder = (order) => axios.post(`${API_URL}/orders`, order);
    export const getOrders = (phoneNumber) =>
      axios.get(`${API_URL}/orders/${phoneNumber}`);
// src/services/api.js
// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// export const getMenuItems = () => {
//   // For development/testing without backend
//   if (process.env.NODE_ENV === 'development' && !process.env.REACT_APP_USE_BACKEND) {
//     return Promise.resolve({ data: sampleMenuItems });
//   }
//   return axios.get(`${API_URL}/menu`);
// };

// export const createOrder = (order) => {
//   // For development/testing without backend
//   if (process.env.NODE_ENV === 'development' && !process.env.REACT_APP_USE_BACKEND) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ data: { id: Date.now(), ...order } });
//       }, 500);
//     });
//   }
//   return axios.post(`${API_URL}/orders`, order);
// };

// export const getOrders = (phoneNumber) => {
//   // For development/testing without backend
//   if (process.env.NODE_ENV === 'development' && !process.env.REACT_APP_USE_BACKEND) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const orders = sampleOrders.filter(order => 
//           order.phoneNumber === phoneNumber
//         );
        
//         if (orders.length > 0) {
//           resolve({ data: orders });
//         } else {
//           reject(new Error('No orders found'));
//         }
//       }, 500);
//     });
//   }
//   return axios.get(`${API_URL}/orders/${phoneNumber}`);
// };

// // Sample menu items for development/testing
// const sampleMenuItems = [
//   {
//     _id: '1',
//     name: 'Classic Burger',
//     description: 'Juicy beef patty with fresh lettuce, tomato, and our special sauce',
//     price: 9.99,
//     category: 'Main Courses'
//   },
//   {
//     _id: '2',
//     name: 'Veggie Burger',
//     description: 'Plant-based patty with avocado, sprouts, and vegan mayo',
//     price: 8.99,
//     category: 'Main Courses'
//   },
//   {
//     _id: '3',
//     name: 'Chicken Caesar Salad',
//     description: 'Crisp romaine with grilled chicken, parmesan, and homemade croutons',
//     price: 7.99,
//     category: 'Salads'
//   },
//   {
//     _id: '4',
//     name: 'Garlic Fries',
//     description: 'Crispy fries tossed in garlic and parsley',
//     price: 4.99,
//     category: 'Sides'
//   },
//   {
//     _id: '5',
//     name: 'Chocolate Milkshake',
//     description: 'Rich chocolate shake topped with whipped cream',
//     price: 4.50,
//     category: 'Drinks'
//   },
//   {
//     _id: '6',
//     name: 'Buffalo Wings',
//     description: 'Spicy chicken wings served with blue cheese dip',
//     price: 8.99,
//     category: 'Appetizers'
//   },
//   {
//     _id: '7',
//     name: 'Mozzarella Sticks',
//     description: 'Breaded mozzarella sticks with marinara sauce',
//     price: 6.99,
//     category: 'Appetizers'
//   },
//   {
//     _id: '8',
//     name: 'Apple Pie',
//     description: 'Homemade apple pie with vanilla ice cream',
//     price: 5.99,
//     category: 'Desserts'
//   },
//   {
//     _id: '9',
//     name: 'Iced Tea',
//     description: 'Freshly brewed iced tea with lemon',
//     price: 2.99,
//     category: 'Drinks'
//   },
//   {
//     _id: '10',
//     name: 'Pasta Alfredo',
//     description: 'Fettuccine pasta with creamy alfredo sauce',
//     price: 10.99,
//     category: 'Main Courses'
//   },
//   {
//     _id: '11',
//     name: 'Onion Rings',
//     description: 'Crispy battered onion rings with dipping sauce',
//     price: 5.99,
//     category: 'Sides'
//   },
//   {
//     _id: '12',
//     name: 'Cheesecake',
//     description: 'New York style cheesecake with berry compote',
//     price: 6.99,
//     category: 'Desserts'
//   }
// ];

// // Sample orders for development/testing
// const sampleOrders = [
//   {
//     id: '101',
//     name: 'John Doe',
//     phoneNumber: '5551234567',
//     createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
//     items: [
//       { name: 'Classic Burger', quantity: 2, price: 9.99 },
//       { name: 'Garlic Fries', quantity: 1, price: 4.99 }
//     ],
//     totalPrice: 24.97
//   },
//   {
//     id: '102',
//     name: 'John Doe',
//     phoneNumber: '5551234567',
//     createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
//     items: [
//       { name: 'Veggie Burger', quantity: 1, price: 8.99 },
//       { name: 'Chocolate Milkshake', quantity: 1, price: 4.50 }
//     ],
//     totalPrice: 13.49
//   }
// ];