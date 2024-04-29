// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file


function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-btn">ホーム</Link>
            <div className="dropdown">
                <button className="dropbtn">データベース</button>
                <div className="dropdown-content">
                    <Link to="/monsters" className="nav-btn">モンスター</Link>
                    <Link to="/items" className="nav-btn">アイテム</Link>
                    <Link to="/quests" className="nav-btn">クエスト</Link>
                    <Link to="/skills" className="nav-btn">スキル</Link>
                </div>
            </div>
            {/* <div className="dropdown">
                <button className="dropbtn">ツール</button>
                <div className="dropdown-content">
                    <Link to="/hunt-timer" className="nav-btn">狩りタイマー</Link>
                    <Link to="/craft-calculator" className="nav-btn">製作計算機</Link>
                </div>
            </div> */}
            <Link to="/map" className="nav-btn">マープ</Link>
            <div className="dropdown">
                <button className="dropbtn">鯖</button>
                <div className="dropdown-content">
                    <Link to="/server-introduction" className="nav-btn">紹介</Link>
                    <Link to="/news" className="nav-btn">ニュース</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
