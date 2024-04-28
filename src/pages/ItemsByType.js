// ItemsByType.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemsByType.css'; // Import the CSS file


function ItemsByType() {
    const { type } = useParams();

    const typeMapping = {
        'weapon': ['sword', 'blunt', 'dagger', 'bow', 'pole', 'dualfist', 'etc'],
        'armor': ['heavy', 'light', 'magic', 'etc'],
        'other': ['Enchant', 'Potion', 'Arrows', 'Lures']
    };

    const displayNameMapping = {
        'sword': '剣',
        'blunt': '鈍器',
        'dagger': '短剣',
        'bow': '弓',
        'pole': '槍',
        'dual': '双剣',
        'dualfist': '拳',
        'etc': 'その他',
        'light': '軽装',
        'heavy': '重装',
        'magic': 'ローブ',
        
        // Add other mappings as needed
    };

    // Get the item types for the current type
    const itemTypes = typeMapping[type] || [];

    return (
        <div>
<ul className="itemsBy-list">
    {itemTypes.map((itemType, index) => (
        <React.Fragment key={itemType}>
            {index > 0 && <li className="separator">┊</li>}
            <li>
                <Link to={`/items/${type}/${itemType}`} className="itemBy-link">{displayNameMapping[itemType] || itemType}</Link>
            </li>
        </React.Fragment>
    ))}
</ul>
        </div>
    );
}

export default ItemsByType;