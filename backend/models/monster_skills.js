// backend/models/monster_skills.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const Monster = require('./monsters');

const MonsterSkill = sequelize.define('MonsterSkill', {
    monster_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Monster,
            key: 'id'
        }
    },
    skill_id: DataTypes.INTEGER,
    level: DataTypes.INTEGER
}, {
    tableName: 'monster_skills',
    timestamps: false
});

module.exports = MonsterSkill;