import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[^0-9]/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (cart.length === 0) {
      newErrors.cart = 'Your cart is empty';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    const orderData = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
      cartItems: cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    try {
      const response = await fetch('https://digital-diner-backend-4ib3.onrender.com/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        clearCart();
        setOrderSuccess(true);
        
        // Redirect after showing success message for 2 seconds
        setTimeout(() => {
          navigate('/cart', { state: { orderSuccess: true } });
        }, 2000);
      } else {
        const errorText = await response.text();
        throw new Error(`Failed to place order: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('Order submission error:', error.message);
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="order-form">
      {orderSuccess ? (
        <div className="success-container">
          <div className="success-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="38" fill="#4CAF50" stroke="#4CAF50" strokeWidth="4"/>
              <path d="M25 40L35 50L55 30" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="success-message">Order Placed Successfully!</h2>
          <p>Thank you for your order.</p>
        </div>
      ) : (
        <>
          <h2>Complete Your Order</h2>
          
          {submitError && (
            <div className="error-message">
              <span className="message-icon">⚠️</span>
              {submitError}
            </div>
          )}
          
          {cart.length === 0 && (
            <div className="error-message">
              <span className="message-icon">⚠️</span>
              Your cart is empty. Please add items before placing an order.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="error-text">{errors.name}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="form-control"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g., 555-123-4567"
              />
              {errors.phoneNumber && <div className="error-text">{errors.phoneNumber}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email (Optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error-text">{errors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="address">Pickup Notes (Optional)</label>
              <textarea
                id="address"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                placeholder="Any special instructions for pickup?"
              ></textarea>
            </div>
            
            <div className="cart-total">
              <span>Order Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <button 
              type="submit" 
              className="form-submit-btn"
              disabled={isSubmitting || cart.length === 0}
            >
              {isSubmitting ? 'Placing Order...' : 'Confirm Order'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default OrderForm;