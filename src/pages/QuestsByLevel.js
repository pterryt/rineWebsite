// pages/QuestsByLevel.js
import React from 'react';
import { Link } from 'react-router-dom';
import './QuestsByLevel.css'; // Import the CSS file

function QuestsByLevel() {
  return (
    <div>
      <div className='quests-title'>クエストのレベル</div>
      <ul className="quests-list">
        <li><Link to="/quests/1-10" className="quest-link">1-10</Link></li>
        <li>┊</li>
        <li><Link to="/quests/11-20" className="quest-link">11-20</Link></li>
        <li>┊</li>
        <li><Link to="/quests/21-30" className="quest-link">21-30</Link></li>
        <li>┊</li>
        <li><Link to="/quests/31-40" className="quest-link">31-40</Link></li>
        <li>┊</li>
        <li><Link to="/quests/41-50" className="quest-link">41-50</Link></li>
        <li>┊</li>
        <li><Link to="/quests/51-60" className="quest-link">51-60</Link></li>
        <li>┊</li>
        <li><Link to="/quests/61-70" className="quest-link">61-70</Link></li>
        <li>┊</li>
        <li><Link to="/quests/71-80" className="quest-link">71-80</Link></li>
      </ul>
    </div>
  );
}

export default QuestsByLevel;