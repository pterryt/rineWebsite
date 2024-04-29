// ItemsOfType.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemsOfType.css'; // Import your CSS file


function ItemsOfType() {
    const [items, setItems] = useState([]);
    const { category, itemType } = useParams();
    const [sortConfig, setSortConfig] = useState(null); // State to keep track of the current sort configuration

    // const icons = require.context('../assets/Icons', true, /\.png$/);

    // Function to handle sorting
    const sortItems = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    useEffect(() => {
        fetch(`http://localhost:3000/api/items/type/${category}/${itemType}`)
            .then(response => response.json())
            .then(data => {
                console.log('Received items:', data);
                console.log('First item:', data[0]); // Log the first item
                setItems(data);
            })
            .catch(error => console.error('Error fetching items:', error));
    }, [category, itemType]);

    function loadIcon(iconName) {
        const iconNameWithoutPrefix = iconName.replace('icon.', '');
        return `${process.env.PUBLIC_URL}/Icons/${iconNameWithoutPrefix}.png`;
    }

    let sortedItems = [...items];
    if (sortConfig !== null) {
        sortedItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }

    return (
        <div className='parent-container'>
            {category === 'weapon' ? (
                <table className='item-table'>
                    <thead>
                        <tr>
                            <th className="table-header"></th>
                            <th className="table-header" onClick={() => sortItems('itemDescription.japanese_name')}></th>
                            <th className="table-header" onClick={() => sortItems('pAtk')}>攻撃力</th>
                            <th className="table-header" onClick={() => sortItems('mAtk')}>魔法力</th>
                            <th className="table-header" onClick={() => sortItems('crystal_type')}>等級</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td><img className='itemIcon' src={loadIcon(item.icon)} alt={item.name} onError={(e) => { e.target.onerror = null; e.target.src = `${process.env.PUBLIC_URL}/default.png` }} /></td>
                                <td>{item['itemDescription.japanese_name'] ? item['itemDescription.japanese_name'] : item.name}</td>
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
                            <th className="table-header"></th>
                            <th className="table-header">防御力</th>
                            <th className="table-header">魔法抵抗力</th>
                            <th className="table-header">等級</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td><img className='itemIcon' src={loadIcon(item.icon)} alt={item.name} onError={(e) => { e.target.onerror = null; e.target.src = `${process.env.PUBLIC_URL}/default.png` }} /></td>
                                <td>{item['itemDescription.japanese_name'] ? item['itemDescription.japanese_name'] : item.name}</td>                                <td>{item.pAtk}</td>
                                <td>{item.pDef}</td>
                                <td>{item.mDef}</td>
                                <td>{item.crystal_type}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : category === 'etcitems' ? (
                // Table for etcitems
                <table className="items-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th onClick={() => sortItems('itemDescription.japanese_name')}>アイテム</th>
                            <th className='etcDescription'>説明</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td><img className='itemIcon' src={loadIcon(item.icon)} alt={item.name} onError={(e) => { e.target.onerror = null; e.target.src = `${process.env.PUBLIC_URL}/default.png` }} /></td>
                                <td>{item['itemDescription.japanese_name']}</td>
                                <td>{item['itemDescription.japanese_description']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                // Table for other items
                <table className="items-table">
                    {/* ... */}
                </table>
            )}
        </div>
    );
}

export default ItemsOfType;