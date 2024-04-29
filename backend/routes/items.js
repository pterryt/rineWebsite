//items.js
const express = require('express');
const router = express.Router();
const db = require('../models');

// Log all incoming requests
router.use(function (req, res, next) {
  console.log(`Received request: ${req.method} ${req.originalUrl}`);
  next();
});

// Route to get items of a specific type
router.get('/type/etcitems/:type', async (req, res) => {
  const { type } = req.params;

  // Define the types
  const types = {
    'materials': 'MATERIAL',
    'recipes': 'RECIPE',
    'enchant_scrolls': ['SCRL_ENCHANT_WP', 'SCRL_ENCHANT_AM', 'BLESS_SCRL_ENCHANT_WP', 'BLESS_SCRL_ENCHANT_AM'],
    'consumables': ['POTION', 'ELIXIR', 'DYE', 'ARROW', 'LURE', 'SEED']
  };

  // Get the etcitem_type for the specified type
  const etcitem_type = types[type];

  // If the type is not valid, return an error
  if (!etcitem_type) {
    return res.status(400).json({ message: 'Invalid type' });
  }

  try {
    const items = await db.Item.findAll({
      where: { etcitem_type },
      attributes: ['icon', 'name'],
      include: [{
        model: db.ItemDescription,
        as: 'itemDescription',
        attributes: ['japanese_name', 'japanese_description'],
        required: false
      }],
      raw: true
    });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to get items of a specific type
router.get('/type/:category/:itemType', async (req, res) => {
  const { category, itemType } = req.params;
  let attribute;
  let additionalSort = [];

  switch (category) {
    case 'weapon':
      attribute = 'weapon_type';
      additionalSort = ['pAtk', 'ASC'];
      break;
    case 'armor':
      attribute = 'armor_type';
      additionalSort = ['pDef', 'ASC'];
      break;
    case 'other':
      attribute = 'etcitem_type';
      break;
    default:
      return res.status(400).json({ message: 'Invalid category' });
  }

  try {
    const items = await db.Item.findAll({
      where: { [attribute]: itemType, for_npc: null, item_skill: null, is_premium: null, is_droppable: null, is_sellable: null },
      attributes: ['icon', 'name', 'pAtk', 'mAtk', 'pDef', 'mDef', 'crystal_type'],
      include: [{
        model: db.ItemDescription,
        as: 'itemDescription',
        attributes: ['japanese_name', 'japanese_description'],
        required: true
      }],
      order: [
        additionalSort
      ].filter(Boolean),
      raw: true
    });

    const order = [null, 'D', 'C', 'B', 'A', 'S', 'S80', 'S84'];
    items.sort((a, b) => {
      return order.indexOf(a.crystal_type) - order.indexOf(b.crystal_type);
    });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;
