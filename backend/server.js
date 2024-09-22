const express = require('express');
const cors = require('cors');
const firebase = require('./firebase');
const schoolRoutes = require('./routes/schools');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/schools', schoolRoutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
