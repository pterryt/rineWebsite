// pages/Race.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RaceList from '../components/RaceList'; // Import RaceList
//import './Race.css'; // Import the CSS file

function Race() {
  const { race } = useParams();

  return (
    <div>
    <RaceList /> {/* Include the race list */}
      {/* Fighter table */}
      <table className="class-table">
        <tr>
          <th colspan="6">{race} Fighter</th>
        </tr>
        {/* Your table rows for Fighter here */}
      </table>
      {/* Mystic table (if applicable) */}
      {race !== 'Dwarf' && (
        <table className="class-table">
          <tr>
            <th colspan="5">{race} Mystic</th>
          </tr>
          {/* Your table rows for Mystic here */}
        </table>
      )}
    </div>
  );
}

export default Race;