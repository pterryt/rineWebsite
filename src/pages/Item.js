//Item.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemBox from '../components/ItemBox'; // Import the ItemBox component

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/items/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Received item:', data);
        setItem(data);
      })
      .catch(error => console.error('Error fetching item:', error));
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <ItemBox item={item} />
    </div>
  );
}

export default Item;