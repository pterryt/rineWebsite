// pages/Items.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css'; // Import the CSS file

function Items() {
  return (
    <div>
      <div className='items-title'>アイテム型</div>
      <ul className="items-list">
        <li><Link to="/items/types/weapon" className="item-link">武器</Link></li>
        <li>┊</li>
        <li><Link to="/items/types/armor" className="item-link">装備</Link></li>
        <li>┊</li>
        <li><Link to="/items/types/etcitems" className="item-link">その他</Link></li>
      </ul>
    </div>
  );
}

export default Items;