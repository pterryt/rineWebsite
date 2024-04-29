const express = require('express');
const app = express();
const cors = require('cors');
const itemsRoutes = require('./backend/routes/items');
const monstersRouter = require('./backend/routes/monsters');
const classSkillsRouter = require('./backend/routes/skills'); // replace with the path to your skills.js file
const questsRouter = require('./backend/routes/quests'); // Add this line

// Use items routes
app.use(cors());
app.use('/api/items', itemsRoutes);
app.use('/api/monsters', monstersRouter);
app.use('/api/skills', classSkillsRouter); // Use the skills router
app.use('/api/quests', questsRouter); // Add this line

// Other middleware and configurations...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});