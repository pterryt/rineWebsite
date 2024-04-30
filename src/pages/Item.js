import React from 'react';
import { useParams } from 'react-router-dom';


function Item() {
  const { id } = useParams();
    
  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default Item;