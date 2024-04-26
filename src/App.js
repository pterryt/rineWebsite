// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ItemsByType from './pages/ItemsByType'; // Import ItemsByType
import ItemsOfType from './pages/ItemsOfType'; // Import ItemsOfType

import Items from './pages/Items';
import Map from './pages/Map';
import Quests from './pages/Quests';
import './App.css'

function App() {
    return (
        <Router>
            <div>
                <header>
                    <Navbar />
                </header>
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/items" element={<Items />} /> {/* Route for main items page */}
                    <Route path="/items/:category/:itemType" element={<ItemsOfType />} />
                    <Route path="/items/types/:type" element={<ItemsByType />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/quests" element={<Quests />} />
                  </Routes>
                </main>
                <footer>
                    {/* Your Footer goes here */}
                </footer>
            </div>
        </Router>
    );
}

export default App;