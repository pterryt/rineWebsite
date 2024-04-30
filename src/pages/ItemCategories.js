// pages/Items.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCategories.css'; // Import the CSS file

function Items() {
  return (
    <div>
      <div className='items-title'>アイテム型</div>
      <ul className="items-list">
        <li><Link to="/items/weapons" className="item-link">武器</Link></li>
        <li>┊</li>
        <li><Link to="/items/armor" className="item-link">装備</Link></li>
        <li>┊</li>
        <li><Link to="/items/etcitems" className="item-link">その他</Link></li>
      </ul>
    </div>
  );
}

export default Items;