//items.js
const express = require('express');
const router = express.Router();
const db = require('../models');

// Log all incoming requests
router.use(function(req, res, next) {
  console.log(`Received request: ${req.method} ${req.originalUrl}`);
  next();
});

router.get('/types/:type', async (req, res) => {
  const { type } = req.params;
  let attribute;
  
  switch (type) {
    case 'weapon':
      attribute = 'weapon_type';
      break;
    case 'armor':
      attribute = 'armor_type';
      break;
    case 'other':
      attribute = 'etcitem_type';
      break;
    default:
      return res.status(400).json({ message: 'Invalid type' });
  }

  try {
    const data = await db.Item.findAll({ attributes: [attribute], group: [attribute], raw: true });
    const distinctKeys = data.map(item => item[attribute]).filter(Boolean); // filter out null values
    res.json(distinctKeys);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to get items of a specific type
router.get('/type/:category/:itemType', async (req, res) => {
  const { category, itemType } = req.params;
  let attribute;
  
  switch (category) {
    case 'weapon':
      attribute = 'weapon_type';
      break;
    case 'armor':
      attribute = 'armor_type';
      break;
    case 'other':
      attribute = 'etcitem_type';
      break;
    default:
      return res.status(400).json({ message: 'Invalid category' });
  }

  try {
    const items = await db.Item.findAll({
      where: { [attribute]: itemType },
      attributes: ['icon', 'name', 'pAtk', 'mAtk', 'pDef', 'mDef', 'crystal_type'],
      raw: true
    });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});
module.exports = router;
