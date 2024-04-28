import React from 'react';
import { useParams } from 'react-router-dom';
import RaceList from '../components/RaceList'; // Import RaceList
import './SkillsByClass.css'; // Import the CSS file

// Define the races and their corresponding classes
const raceMapping = {
  'Human': ['Fighter', 'Mystic'],
  'Elf': ['Fighter', 'Mystic'],
  'Dark Elf': ['Fighter', 'Mystic'],
  'Orc': ['Fighter', 'Mystic'],
  'Dwarf': ['Fighter']
};

function SkillsByClass() {
  let { race } = useParams(); // Get the race from the route parameters

  // If no race is selected, only render the race list
  if (!race) {
    return <RaceList />;
  }

  // Get the classes for the current race
  const classes = raceMapping[race] || [];

  return (
    <div>
      <RaceList /> {/* Include the race list */}

      <h2>{race}</h2>
      {classes.map((classType) => (
        <table className="class-table" key={classType}>
          <tr>
            <th colspan="6">{race} {classType}</th>
          </tr>
          {/* Your table rows for each classType here */}
        </table>
      ))}
    </div>
  );
}

export default SkillsByClass;