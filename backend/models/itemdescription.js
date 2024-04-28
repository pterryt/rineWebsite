// backend/models/items_descriptions.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const ItemDescription = sequelize.define('ItemDescription', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'items', // name of the related table
      key: 'id' // key in the related table that we're referencing
    }
  },
  japanese_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  japanese_description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  english_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  english_description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'items_descriptions' // specify the table name
});

ItemDescription.associate = function(models) {
  ItemDescription.belongsTo(models.Item, {
    foreignKey: 'id',
    as: 'item'
  });
};


module.exports = ItemDescription;