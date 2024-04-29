//skills.js
const express = require('express');
const router = express.Router();
const db = require('../models');

// Log all incoming requests
router.use(function (req, res, next) {
  console.log(`Received request: ${req.method} ${req.originalUrl}`);
  next();
});

// Route to get class skills
router.get('/:englishName', async (req, res) => {
  const className = req.params.englishName;

  // Find the class by its English name
  const classObj = await db.Class.findOne({ where: { english_name: className } });

  if (!classObj) {
    return res.status(404).json({ error: 'Class not found' });
  }

  // Find all ClassSkillTree instances that have the same class_id as the class
  const classSkills = await db.ClassSkillTree.findAll({
    where: { class_id: classObj.id },
    include: [ {
      model: db.SkillDescription,
      as: 'skillDescription'
    }],
    order: [
      ['skill_min_level', 'ASC']
    ]
    
  });

  res.json(classSkills);
});

module.exports = router;