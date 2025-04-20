// import React, { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem('cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (item, quantity) => {
//     console.log('Adding item to cart:', item, 'Quantity:', quantity);
//     const existingItem = cart.find((i) => i._id === item._id);
//     let updatedCart;
//     if (existingItem) {
//       updatedCart = cart.map((i) =>
//         i._id === item._id ? { ...i, quantity: i.quantity + quantity } : i
//       );
//     } else {
//       updatedCart = [...cart, { ...item, quantity, _id: item._id || Date.now().toString() }];
//     }
//     setCart(updatedCart);
//     console.log('Updated cart state:', updatedCart);
//   };

//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem('cart');
//     console.log('Cart cleared');
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find((i) => i._id === item._id);
    let updatedCart;
    
    if (existingItem) {
      updatedCart = cart.map((i) =>
        i._id === item._id ? { ...i, quantity: i.quantity + quantity } : i
      );
    } else {
      updatedCart = [...cart, { ...item, quantity, _id: item._id || Date.now().toString() }];
    }
    
    setCart(updatedCart);
    
    // Show a toast notification
    showToast(`${item.name} added to cart!`);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item._id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // Simple toast notification
  const showToast = (message) => {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    
    // Add to DOM
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart,
      updateQuantity,
      clearCart 
    }}>
      <style>
        {`
          .toast-notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 16px;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s, transform 0.3s;
          }
          
          .toast-notification.show {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
      {children}
    </CartContext.Provider>
  );
};