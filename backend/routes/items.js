const express = require('express');
const router = express.Router();
const db = require('../models');

// Route to get all items
router.get('/', async (req, res) => {
  try {
    const itemsData = await db.Item.findAll(); // Correct model reference
    res.json(itemsData); // Correct variable name
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to get weapon types
router.get('/types', async (req, res) => {
  try {
    const weaponTypes = await db.Item.findAll({ attributes: ['weaponType'], group: ['weaponType'], raw: true });
    const distinctWeaponTypes = weaponTypes.map(item => item.weaponType);
    res.json(distinctWeaponTypes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to get items by type
router.get('/type/:weaponType', async (req, res) => {
  const { weaponType } = req.params;
  try {
    const itemsData = await db.Item.findAll({ where: { itemType: 'Weapon', weaponType } });
    res.json(itemsData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
