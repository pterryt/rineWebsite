// ItemsByType.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ItemsByType() {
    const [itemTypes, setItemTypes] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        // Fetch item types from the backend when the component mounts
        fetch(`http://localhost:3000/api/items/types/${type}`) // Use the type in the fetch URL
            .then(response => response.json())
            .then(data => {
                console.log('Received item types:', data); // Print the received item types to the console
                setItemTypes(data);
            })
            .catch(error => console.error('Error fetching item types:', error));
    }, [type]); // Add type as a dependency to the useEffect hook

    const handleClick = (type) => {
        console.log('Clicked type:', type);
    };

    return (
        <div>
            <ul>
            {itemTypes.map(itemType => (
                <li key={itemType}>
                    <Link to={`/items/${type}/${itemType}`} onClick={() => handleClick(itemType)}>{itemType}</Link> 
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemsByType;