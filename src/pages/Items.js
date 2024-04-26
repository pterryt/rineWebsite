// pages/Items.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css'; // Import the CSS file

function Items() {
  return (
    <div>
      <ul className="items-list">
        <li><Link to="/items/types/weapon" className="item-link">武器</Link></li>
        <li><Link to="/items/types/armor" className="item-link">鎧</Link></li>
        <li><Link to="/items/types/other" className="item-link">他の</Link></li>
      </ul>
    </div>
  );
}

export default Items;