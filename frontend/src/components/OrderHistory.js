import React, { useState } from 'react';
import { getOrders } from '../services/api';

const OrderHistory = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const fetchOrders = async () => {
    if (!phoneNumber.trim()) {
      setError('Please enter a phone number');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSearched(true);
      
      const response = await getOrders(phoneNumber);
      let data = response.data || [];
      console.log('Received orders data:', data); // Debug log
      
      // Sort orders by createdAt date (newest first)
      data = sortOrdersByDate(data);
      
      setOrders(data);

      if (data.length === 0) {
        setError('Number not found');
      }
    } catch (err) {
      console.error('API Error fetching orders:', err.message, err.response?.data, err.response?.status);
      // Check if the error is a "not found" scenario (e.g., 404 status)
      if (err.response?.status === 404) {
        setError('Number not found');
      } else {
        setError('Failed to retrieve orders. Please check the backend.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Sort orders by date (newest first)
  const sortOrdersByDate = (orders) => {
    return [...orders].sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
      const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
      return dateB - dateA; // Descending order (newest first)
    });
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    if (searched) {
      setError('');
      setOrders([]);
      setSearched(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchOrders();
    }
  };

  // Calculate total from items if totalPrice is not available
  const calculateOrderTotal = (items) => {
    if (!items || !Array.isArray(items) || items.length === 0) {
      return 0;
    }
    
    return items.reduce((total, item) => {
      const itemPrice = item.price || 0;
      const quantity = item.quantity || 1;
      return total + (itemPrice * quantity);
    }, 0);
  };

  return (
    <div className="order-history">
      <h2>Order History</h2>
      
      <div className="order-search">
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter your phone number"
          className="form-control"
        />
        <button 
          onClick={fetchOrders} 
          className="search-button"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'View Orders'}
        </button>
      </div>
      
      {error && (
        <div className="error-message">
          <span className="message-icon">ℹ️</span>
          {error}
        </div>
      )}
      
      {!error && orders.length > 0 && (
        <div className="order-list">
          {orders.map((order) => {
            // Calculate total if not available
            const total = typeof order.totalPrice === 'number' 
              ? order.totalPrice 
              : calculateOrderTotal(order.items);
              
            return (
              <div key={order.id} className="order-item">
                <div className="order-header">
                  <div className="order-id">Order #{order.id}</div>
                  <div className="order-date">
                    {order.createdAt ? formatDate(order.createdAt) : 'N/A'}
                  </div>
                </div>
                
                <div className="order-items">
                  <strong>Items:</strong>
                  <ul className="order-items-list">
                    {order.items && Array.isArray(order.items) ? (
                      order.items.map((item, index) => (
                        <li key={index}>
                          {item.name} x{item.quantity} - ${(item.price * item.quantity).toFixed(2)}
                        </li>
                      ))
                    ) : (
                      <li>No items data</li>
                    )}
                  </ul>
                </div>
                
                <div className="order-total">
                  <strong>Total:</strong> ${total.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      {searched && !error && orders.length === 0 && !loading && (
        <div className="cart-empty">
          <div className="cart-empty-icon">📋</div>
          <p>No order history found</p>
          <p>Place an order to see it here!</p>
          <a href="/" className="place-order-btn">Browse Menu</a>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;