// pages/Items.js
import React from 'react';
import { Link } from 'react-router-dom';

function Items() {
  return (
    <div>
      <h2>Item Categories</h2>
      <ul>
        <li><Link to="/items/weapons">武器</Link></li>
        <li><Link to="/items/armor">鎧</Link></li>
        <li><Link to="/items/etc">他の</Link></li>
      </ul>
    </div>
  );
}

export default Items;
