// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ItemsByType from './pages/ItemsByType'; // Import ItemsByType
import ItemsOfType from './pages/ItemsOfType'; // Import ItemsOfType
import icon from './assets/temp_icon_4.png'; // Import the image

import Items from './pages/Items';
import Map from './pages/Map';
import Quests from './pages/QuestsByLevel';
import Monsters from './pages/MonstersByLevel';
import Skills from './pages/SkillsByClass';
import Race from './pages/Race';
import MonstersByLevelRange from './pages/MonstersByLevelRange';
import ClassSkills from './pages/ClassSkills'; // Import ClassSkills
import QuestsOfLevel from './pages/QuestsOfLevel';


import './App.css'

function App() {
    return (
        <Router>
            <div>
                <header>
                    <div className="search-container">
                        <img src={icon} alt="Website Icon" className="icon" />
                        <div className='iconText'>L2日本DB</div>
                        <form action="/search" method="get" className="search-form">
                            <input type="search" name="q" placeholder="検索" />
                        </form>
                    </div>

                    </header>
                                        <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/items" element={<Items />} /> {/* Route for main items page */}
                    <Route path="/items/:category/:itemType" element={<ItemsOfType />} />
                    <Route path="/items/types/:type" element={<ItemsByType />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/quests" element={<Quests />} />
                    <Route path="/quests/levels/:range" element={<QuestsOfLevel />} />
                    <Route path="/monsters" element={<Monsters />} />
                    <Route path="/monsters/levels/:range" element={<MonstersByLevelRange />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/skills/:race" element={<Race />} /> {/* Route for each race */}
                    <Route path="/skills/:race/:className" element={<ClassSkills />} /> {/* Route for each class */}
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