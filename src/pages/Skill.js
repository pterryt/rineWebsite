import React from 'react';
import { useParams } from 'react-router-dom';


function Skill() {
  const { id } = useParams();
    
  return (
    <div>
      <h1>Skill</h1>
    </div>
  );
}

export default Skill;