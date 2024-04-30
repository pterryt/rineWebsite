// pages/MonstersByLevel.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MonstersByLevel.css'; // Import the CSS file

function MonstersByLevel() {
  return (
    <div>
      <div className='monsters-title'>モンスターのレベル</div>
      <ul className="monsters-list">
        <li><Link to="/monsters/1-10" className="monster-link">1-10</Link></li>
        <li>┊</li>
        <li><Link to="/monsters/11-20" className="monster-link">11-20</Link></li>
        <li>┊</li>
        <li><Link to="/monsters/21-30" className="monster-link">21-30</Link></li>
        <li>┊</li>
        <li><Link to="/monsters/31-40" className="monster-link">31-40</Link></li>
        <li>┊</li>
        <li><Link to="/monsters/41-50" className="monster-link">41-50</Link></li>
        <li>┊</li>
        <li><Link to="/monsters/51-60" className="monster-link">51-60</Link></li>
        <li>┊</li>
        <li><Link to="/monsters/61-70" className="monster-link">61-70</Link></li>
        <li>┊</li>
        <li><Link to="/monsters/71-80" className="monster-link">71-80</Link></li>
        <li>┊</li>
        <li><Link to="/monsters/81-90" className="monster-link">81-90</Link></li>
      </ul>
    </div>
  );
}

export default MonstersByLevel;