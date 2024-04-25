// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <img src="temp_icon_2.png" alt="Website Icon" className="icon" />
            <Link to="/" className="nav-btn">ホーム</Link>
            <Link to="/items" className="nav-btn">アイテム</Link> {/* Main アイテム link */}
            {/* Add more links as needed */}
            <Link to="/map" className="nav-btn">マープ</Link>
            <Link to="/quests" className="nav-btn">クエスト</Link>
        </nav>
    );
}

export default Navbar;
