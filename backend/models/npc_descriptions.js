// backend/models/npc_descriptions.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const NpcDescription = sequelize.define('NpcDescription', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  japanese_name: DataTypes.STRING(55),
  english_name: DataTypes.STRING(55)
}, {
  tableName: 'npc_descriptions',
  timestamps: false
});


NpcDescription.associate = function(models) {
  NpcDescription.hasOne(models.Monster, {
    foreignKey: 'id',
    as: 'monster'
  });
};

module.exports = NpcDescription;