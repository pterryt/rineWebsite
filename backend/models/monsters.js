//backend/models/monsters.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Monster = sequelize.define('Monster', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: 'npc_descriptions',
            key: 'id'
        }
    },
    name: DataTypes.STRING(255),
    title: DataTypes.STRING(255),
    exp: DataTypes.INTEGER,
    sp: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    hp: DataTypes.DECIMAL(10, 2),
    pAtk: DataTypes.DECIMAL(10, 2),
    mAtk: DataTypes.DECIMAL(10, 2),
    pDef: DataTypes.DECIMAL(10, 2),
    mDef: DataTypes.DECIMAL(10, 2),
    crit: DataTypes.INTEGER,
    atkSpd: DataTypes.INTEGER,
    corpseTime: DataTypes.INTEGER,
    dropHerbGroup: DataTypes.INTEGER,
    aggro: DataTypes.INTEGER
}, {
    tableName: 'monsters',
    timestamps: false
});

Monster.associate = function(models) {
  Monster.belongsTo(models.NpcDescription, {
    foreignKey: 'id',
    as: 'npcDescription'
  });
};

module.exports = Monster;