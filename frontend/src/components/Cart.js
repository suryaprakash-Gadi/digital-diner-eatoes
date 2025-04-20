// import React, { useContext, useEffect, useState } from 'react';
// import { CartContext } from '../context/CartContext';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const { cart, clearCart } = useContext(CartContext);
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   useEffect(() => {
//     console.log('Cart state loaded:', cart); // Debug log
//     setOrderPlaced(false); // Reset order message when cart updates
//   }, [cart]);

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const handlePlaceOrder = () => {
//     setOrderPlaced(true); // Show success message immediately
//     // Clear cart will be handled after order submission (via OrderPage callback)
//   };

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       <div className="cart-items-box">
//         {cart.length === 0 ? (
//           <p>Cart is empty, add some items to place order.</p>
//         ) : (
//           <>
//             <ul>
//               {cart.map((item) => (
//                 <li key={item._id}>
//                   {item.name} - ${item.price.toFixed(2)} x {item.quantity}
//                 </li>
//               ))}
//             </ul>
//             <p>Total: ${total.toFixed(2)}</p>
//             {orderPlaced && <p>Order successful!</p>}
//           </>
//         )}
//       </div>
//       <Link to="/order" className="place-order-btn" onClick={handlePlaceOrder}>
//         Place Order
//       </Link>
//     </div>
//   );
// };

// export default Cart;
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    setOrderPlaced(false);
  }, [cart]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      
      {orderPlaced && (
        <div className="success-message">
          <span className="message-icon">✓</span>
          Order placed successfully!
        </div>
      )}

      {cart.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <p>Your cart is empty</p>
          <p>Add some delicious items to get started!</p>
          <Link to="/" className="place-order-btn">Browse Menu</Link>
        </div>
      ) : (
        <>
          <div className="cart-items-box">
            {cart.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="quantity-input"
                      value={item.quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        updateQuantity(item._id, isNaN(value) || value < 1 ? 1 : value);
                      }}
                      min="1"
                    />
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-item-btn" 
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          <Link 
            to="/order" 
            className="place-order-btn"
          >
            Place Order
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;