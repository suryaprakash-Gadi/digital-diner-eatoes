// import React, { useContext, useState } from 'react';
// import { CartContext } from '../context/CartContext';

// const MenuItem = ({ item }) => {
//   const { addToCart } = useContext(CartContext);
//   const [quantity, setQuantity] = useState(0);

//   const handleAddToCart = () => {
//     if (quantity > 0) {
//       addToCart(item, quantity);
//       alert(`${item.name} x${quantity} has been added to your cart successfully!`);
//       setQuantity(0); // Reset quantity after adding
//     } else {
//       alert('Please select a quantity greater than 0!');
//     }
//   };

//   const handleQuantityChange = (e) => {
//     const value = parseInt(e.target.value, 10) || 0;
//     setQuantity(value < 0 ? 0 : value);
//   };

//   return (
//     <div className="menu-item">
//       <h3>{item.name}</h3>
//       <p>{item.description}</p>
//       <p>${item.price.toFixed(2)}</p>
//       <div>
//         <input
//           type="number"
//           value={quantity}
//           onChange={handleQuantityChange}
//           min="1"
//           style={{ width: '60px', marginRight: '10px' }}
//         />
//         <button onClick={handleAddToCart}>Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// // export default MenuItem;
// import React, { useContext, useState } from 'react';
// import { CartContext } from '../context/CartContext';

// const MenuItem = ({ item }) => {
//   const { addToCart } = useContext(CartContext);
//   const [quantity, setQuantity] = useState(1);

//   const handleAddToCart = () => {
//     if (quantity > 0) {
//       addToCart(item, quantity);
//       setQuantity(1); // Reset quantity after adding
//     }
//   };

//   const increaseQuantity = () => {
//     setQuantity(prev => prev + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(prev => prev - 1);
//     }
//   };

//   return (
//     <div className="menu-item">
//       <div className="item-image">
//         {/* Placeholder for food image */}
//         <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" fill="#ccc"/>
//         </svg>
//       </div>
//       <div className="item-content">
//         <h3 className="item-name">{item.name}</h3>
//         <p className="item-description">{item.description}</p>
//         <div className="item-price">${item.price.toFixed(2)}</div>
//         <div className="item-actions">
//           <div className="quantity-control">
//             <button 
//               type="button" 
//               className="quantity-btn" 
//               onClick={decreaseQuantity}
//               disabled={quantity <= 1}
//             >
//               -
//             </button>
//             <input
//               type="number"
//               className="quantity-input"
//               value={quantity}
//               onChange={(e) => {
//                 const value = parseInt(e.target.value, 10);
//                 setQuantity(isNaN(value) || value < 1 ? 1 : value);
//               }}
//               min="1"
//             />
//             <button 
//               type="button" 
//               className="quantity-btn" 
//               onClick={increaseQuantity}
//             >
//               +
//             </button>
//           </div>
//           <button 
//             className="add-to-cart-btn" 
//             onClick={handleAddToCart}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuItem;

import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const MenuItem = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(item, quantity);
      setQuantity(1); // Reset quantity after adding
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="menu-item">
      <div className="item-image">
      <img
        src={item.image}
        alt={item.name}
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
      />
    </div>
      <div className="item-content">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-price">${item.price.toFixed(2)}</div>
        <div className="item-actions">
          <div className="quantity-control">
            <button 
              type="button" 
              className="quantity-btn" 
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
            >
              -
            </button>
            <input
              type="number"
              className="quantity-input"
              value={quantity}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setQuantity(isNaN(value) || value < 1 ? 1 : value);
              }}
              min="1"
            />
            <button 
              type="button" 
              className="quantity-btn" 
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <button 
            className="add-to-cart-btn" 
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;