const express = require('express');
const app = express();
const cors = require('cors');
const itemsRoutes = require('./backend/routes/items');
const monstersRouter = require('./backend/routes/monsters');

// Use items routes
app.use(cors());
app.use('/api/items', itemsRoutes);
app.use('/api/monsters', monstersRouter);

// Other middleware and configurations...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});