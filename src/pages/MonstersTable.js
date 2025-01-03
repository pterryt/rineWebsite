// pages/MonstersTable.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Corrected import
import './MonstersTable.css'; // Import the CSS file

function MonstersByLevelRange() {
  const [monsters, setMonsters] = useState([]);
  const { range } = useParams();

  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await fetch(`http://localhost:3000/api/monsters/level/${range}`);
      const data = await response.json();
      setMonsters(data);
      console.log(data);
    };

    fetchMonsters();
  }, [range]);

  return (
    <div>
      <table className='monster-table'>
        <thead>
          <tr>
            <th>レベル</th>
            <th className='table-header-name'>モンスター</th>
            <th>体力</th>
            <th>経験値</th>
          </tr>
        </thead>
        <tbody>
          {monsters.map(monster => (
            <tr key={monster.id}>
              <td>{monster.level}</td>
              <td className='name-td'><Link to={`/monsters/${range}/${monster.id}`}>{monster['npcDescription.japanese_name']}</Link></td>
              <td>{monster.hp}</td>
              <td>{monster.exp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MonstersByLevelRange;