// backend/routes/quests.js
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
        const quests = await db.QuestDescription.findAll({
            where: {
                [db.Sequelize.Op.or]: [
                    {
                        lvl_min: {
                            [db.Sequelize.Op.between]: [minLevel, maxLevel]
                        }
                    },
                    {
                        lvl_min: null,
                        [db.Sequelize.Op.and]: {
                            [db.Sequelize.Op.or]: [
                                { lvl_max: { [db.Sequelize.Op.gte]: minLevel } },
                                { lvl_max: null }
                            ]
                        }
                    }
                ]
            },
            order: [
                ['lvl_min', 'ASC'],
            ],
            raw: true
        });
        res.json(quests);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;