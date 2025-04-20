// import React from 'react';
//    import MenuItem from './MenuItem';

//    const MenuList = ({ items }) => {
//      return (
//        <div className="menu-list">
//          {items.map((item) => (
//            <MenuItem key={item._id} item={item} />
//          ))}
//        </div>
//      );
//    };

//    export default MenuList;
import React, { useState } from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Extract unique categories from items
  const categories = ['All', ...new Set(items.map(item => item.category))];
  
  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="menu-container">
      <div className="category-tabs">
        {categories.map(category => (
          <div 
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      
      <h2 className="category-title">{activeCategory}</h2>
      <div className="menu-list">
        {filteredItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;