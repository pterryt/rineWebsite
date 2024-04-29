// backend/models/monster_drops.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const Monster = require('./monsters');

const MonsterDrop = sequelize.define('MonsterDrop', {
    monster_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Monster,
            key: 'id'
        }
    },
    category_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    min: DataTypes.INTEGER,
    max: DataTypes.INTEGER,
    chance: DataTypes.INTEGER
}, {
    tableName: 'monster_drops',
    timestamps: false
});

module.exports = MonsterDrop;