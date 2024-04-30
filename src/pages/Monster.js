import React from 'react';
import { useParams } from 'react-router-dom';


function Monster() {
  const { id } = useParams();
    
  return (
    <div>
      <h1>Monster</h1>
    </div>
  );
}

export default Monster;