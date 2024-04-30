import React from 'react';
import './ItemBox.css';

function loadIcon(iconName) {
    const iconNameWithoutPrefix = iconName.replace('icon.', '');
    return `${process.env.PUBLIC_URL}/Icons/${iconNameWithoutPrefix}.png`;
}

function ItemBox({ item }) {
    return (
        <div className="item-box" style={{ background: 'rgb(41, 38, 36)', padding: '10px' }}>
            <div className="itemBox-root">
                <div className="itemBox-heading">
                    <img src={loadIcon(item.icon)} alt={item.name} className="itemBox-icon" />
                    <div>
                        <div className="itemBox-name">
                            {item.name}
                            <span className="grade">{item.crystal_type ? item.crystal_type : 'NG'}</span>
                        </div>
                        <div className="itemBox-type">{item.bodypart}</div>
                    </div>
                </div>

                {item.itemType === 'Armor' && (
                    <div className="itemBox-stat">
                        <span className="itemBox-statName">P Def:</span>
                        <span className="itemBox-statValue">{item.pDef}</span>
                    </div>
                )}
                {item.itemType === 'Weapon' && (
                    <div className="itemBox-stat">
                        <span className="itemBox-statName">P Atk:</span>
                        <span className="itemBox-statValue">{item.pAtk}</span>
                    </div>

                )}
                <div className="itemBox-stat">
                    <span className="itemBox-statName">Weight:</span>
                    <span className="itemBox-statValue">{item.weight}</span>
                </div>
            </div>
        </div>
    );
}

export default ItemBox;