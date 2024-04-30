import React from 'react';
import { useParams } from 'react-router-dom';


function Quest() {
  const { id } = useParams();
    
  return (
    <div>
      <h1>Quest</h1>
    </div>
  );
}

export default Quest;