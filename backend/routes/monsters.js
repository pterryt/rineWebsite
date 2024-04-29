// backend/routes/monsters.js
const express = require('express');
const router = express.Router();
const db = require('../models');

router.use(function (req, res, next) {
    console.log(`Received request: ${req.method} ${req.originalUrl}`);
    next();
});

router.get('/level/:range', async (req, res) => {
    const { range } = req.params;
    const [minLevel, maxLevel] = range.split('-').map(Number);

    if (isNaN(minLevel) || isNaN(maxLevel)) {
        return res.status(400).json({ message: 'Invalid level range' });
    }

    try {
        const monsters = await db.Monster.findAll({
            where: {
                level: {
                    [db.Sequelize.Op.between]: [minLevel, maxLevel]
                }
            },
            attributes: ['name', 'title', 'exp', 'sp', 'level', 'hp', 'pAtk', 'mAtk', 'pDef', 'mDef', 'crit', 'atkSpd', 'corpseTime', 'dropHerbGroup', 'aggro'],
            include: [{
                model: db.NpcDescription,
                as: 'npcDescription',
                attributes: ['japanese_name'],
                required: true
            }],
            order: [
                ['level', 'ASC']
            ],
            raw: true
        });
        res.json(monsters);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;