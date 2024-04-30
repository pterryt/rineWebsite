// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Map from './pages/Map';
import icon from './assets/temp_icon_4.png';
//items
import Items from './pages/ItemCategories';
import ItemTypes from './pages/ItemTypes';
import ItemsTable from './pages/ItemsTable';
//skills
import Skills from './pages/Skills';
import SkillsByClass from './pages/SkillsByClass';
import SkillsTable from './pages/SkillsTable';
//monsters
import Monsters from './pages/MonstersByLevel';
import MonstersTable from './pages/MonstersTable';
//quests
import Quests from './pages/QuestsByLevel';
import QuestsOfLevel from './pages/QuestsTable';


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
                    <Route path="/items/:type" element={<ItemTypes />} />
                    <Route path="/items/:category/:itemType" element={<ItemsTable />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/quests" element={<Quests />} />
                    <Route path="/quests/:range" element={<QuestsOfLevel />} />
                    <Route path="/monsters" element={<Monsters />} />
                    <Route path="/monsters/:range" element={<MonstersTable />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/skills/:race" element={<SkillsByClass />} /> {/* Route for each race */}
                    <Route path="/skills/:race/:className" element={<SkillsTable />} /> {/* Route for each class */}
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