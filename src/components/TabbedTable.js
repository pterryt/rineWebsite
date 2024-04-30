import React, { useState } from 'react';

function TabbedTable({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);

  return (
    <div className="tabbed-table">
      <div className="tabs">
        {tabs.map(tab => (
          <button 
            key={tab.name}
            onClick={() => setSelectedTab(tab.name)}
            className={selectedTab === tab.name ? 'active' : ''}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.filter(tab => tab.name === selectedTab).map(tab => (
          <table key={tab.name}>
            <thead>
              <tr>
                {tab.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tab.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}

export default TabbedTable;