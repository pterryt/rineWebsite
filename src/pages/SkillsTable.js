// src/pages/ClassSkills.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SkillsTable.css';

function ClassSkills() {
    const { className } = useParams();
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // Fetch the skills for the specific class from your API
        // This is just a placeholder, replace it with your actual API call
        fetch(`http://localhost:3000/api/skills/${decodeURIComponent(className)}`)
            .then(response => response.text())  // change this line
            .then(text => {
                console.log(text);
                return JSON.parse(text);
            })
            .then(data => setSkills(data))
            .catch(error => console.error('Error:', error));
    }, [className]);

    function loadIcon(iconName) {
        return `${process.env.PUBLIC_URL}/Icons/${iconName}.png`;
    }

    return (
        <table className='skillTable'>
            <thead>
                <tr>
                    <th className='levelObt'></th>
                    <th>獲得</th>
                    <th>スキル</th>
                    <th>説明</th>
                    <th>レベル</th>
                    {/* Add more columns as needed */}
                </tr>
            </thead>
            <tbody>
                {skills.map(skill => (
                    <tr key={skill.skill_id}>
                        <td><img className='skillIcon' src={loadIcon(skill.skillDescription.icon)} alt={skill.name} onError={(e) => { e.target.onerror = null; e.target.src = `${process.env.PUBLIC_URL}/default.png` }} /></td>
                        <td>{skill.skill_min_level}</td>
                        <td>{skill.skillDescription.japanese_name}</td>
                        <td>{skill.skillDescription.japanese_description}</td>
                        <td>Lv. {skill.skillDescription.level}</td>
                        {/* Add more cells as needed */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ClassSkills;