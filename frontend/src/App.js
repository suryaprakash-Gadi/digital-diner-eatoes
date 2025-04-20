// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { CartProvider } from './context/CartContext';
// import Home from './pages/Home';
// import CartPage from './pages/CartPage';
// import OrderPage from './pages/OrderPage';
// import HistoryPage from './pages/HistoryPage';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <CartProvider>
//         <nav>
//           <a href="/">Menu</a>
//           <a href="/cart">Cart</a>
//           <a href="/history">Order History</a>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/order" element={<OrderPage />} />
//           <Route path="/history" element={<HistoryPage />} />
//         </Routes>
//       </CartProvider>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import HistoryPage from './pages/HistoryPage';
import './App.css';
import { CartContext } from './context/CartContext';


const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <header>
            <nav>
              <Link to="/" className="logo">
                <span className="logo-icon">🍽️</span>
                <span>The Digital Diner</span>
              </Link>
              <div className="nav-links">
                <Link to="/">Menu</Link>
                <Link to="/cart" className="cart-icon">
                  Cart
                  <CartCounter />
                </Link>
                <Link to="/history">Order History</Link>
              </div>
            </nav>
          </header>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

// Cart counter component to show item count in the navigation
const CartCounter = () => {
  const { cart } = React.useContext(CartContext);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  
  if (itemCount === 0) return null;
  
  return <span className="cart-count">{itemCount}</span>;
};

export default App;