import React, { useState, useEffect } from 'react';
import MenuList from '../components/MenuList';
import { getMenuItems } from '../services/api';

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await getMenuItems();
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };
    fetchMenu();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to The Digital Diner</h1>
      <MenuList items={menuItems} />
    </div>
  );
};

export default Home;