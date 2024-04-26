// ItemsOfType.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemsOfType.css'; // Import your CSS file


function ItemsOfType() {
    const [items, setItems] = useState([]);
    const { category, itemType } = useParams();
    // const icons = require.context('../assets/Icons', true, /\.png$/);

    useEffect(() => {
        fetch(`http://localhost:3000/api/items/type/${category}/${itemType}`)
            .then(response => response.json())
            .then(data => {
                console.log('Received items:', data);
                setItems(data);
            })
            .catch(error => console.error('Error fetching items:', error));
    }, [category, itemType]);

    function loadIcon(iconName) {
        const iconNameWithoutPrefix = iconName.replace('icon.', '');
        return `${process.env.PUBLIC_URL}/Icons/${iconNameWithoutPrefix}.png`;
    }

    return (
        <div>
            {category === 'weapon' ? (
                <table>
                    <thead>
                        <tr>
                        <th className="table-header"></th>
                        <th className="table-header">名</th>
                        <th className="table-header">攻撃力</th>
                        <th className="table-header">魔法力</th>
                        <th className="table-header">等級</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td><img src={loadIcon(item.icon)} alt={item.name} onError={(e) => {e.target.onerror = null; e.target.src=`${process.env.PUBLIC_URL}/default.png`}} /></td>
                                <td>{item.name}</td>
                                <td>{item.pAtk}</td>
                                <td>{item.mAtk}</td>
                                <td>{item.crystal_type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : category === 'armor' ? (
                <table>
                    <thead>
                        <tr>
                        <th className="table-header"></th>
                        <th className="table-header">名</th>
                        <th className="table-header">物理防御</th>
                        <th className="table-header">魔法防御</th>
                        <th className="table-header">等級</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td><img src={loadIcon(item.icon)} alt={item.name} onError={(e) => {e.target.onerror = null; e.target.src=`${process.env.PUBLIC_URL}/default.png`}} /></td>
                                <td>{item.name}</td>
                                <td>{item.pDef}</td>
                                <td>{item.mDef}</td>
                                <td>{item.crystal_type}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
        </div>
    );
}

export default ItemsOfType;