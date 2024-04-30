// pages/QuestsTable.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './QuestsTable.css';

function QuestsOfLevel() {
  const { range } = useParams();
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/quests/level/${range}`)
      .then(response => response.json())
      .then(data => setQuests(data))
      .catch(error => console.error(error));
  }, [range]);

  return (
    <div>
      <h1 className='quest-table-title'>クエスト（{range}）</h1>
      <table className='quest-table'>
        <thead>
          <tr>
            <th>条件</th>
            <th>クエスト名</th>
          </tr>
        </thead>
        <tbody>
          {quests.map(quest => (
            <tr key={quest.id}>
              <td>{quest.lvl_min || '-'}</td>
              <td><Link to={`/quests/${range}/${quest.id}`}>{quest.title_japanese}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuestsOfLevel;