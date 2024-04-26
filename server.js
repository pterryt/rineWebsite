const express = require('express');
const app = express();
const cors = require('cors');
const itemsRoutes = require('./backend/routes/items');

// Use items routes
app.use(cors());
app.use('/api/items', itemsRoutes);

// Other middleware and configurations...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});