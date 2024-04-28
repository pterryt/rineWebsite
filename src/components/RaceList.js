// components/RaceList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './RaceList.css'; // Import the CSS file

// Define the races
const races = ['Human', 'Elf', 'Dark Elf', 'Orc', 'Dwarf'];

function RaceList() {
  return (
    <div className='raceList'>
    <p>
      {races.map((race, index) => (
        <span key={index}>
          {index > 0 && ' ┊ '}
          <Link to={`/skills/${race}`} className="race-link">{race}</Link>
        </span>
      ))}
    </p>
    </div>
  );
}

export default RaceList;