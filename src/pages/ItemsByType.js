import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ItemsByType() {
    const [itemTypes, setItemTypes] = useState([]);

    useEffect(() => {
        // Fetch item types from the backend when the component mounts
        fetch('/items/types') // Corrected the backend route for fetching item types
            .then(response => response.json())
            .then(data => {
                console.log('Received item types:', data); // Print the received item types to the console
                setItemTypes(data);
            })
            .catch(error => console.error('Error fetching item types:', error));
    }, []);

    return (
        <div>
            <h1>Items by Type</h1>
            <p>Click on an item type to view items of that type:</p>
            <ul>
                {itemTypes.map(type => (
                    <li key={type}>
                        <Link to={`/items/type/${type}`}>{type}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemsByType;
