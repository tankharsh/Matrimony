require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const adminRoute = require('./routes/admin')


// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));



// Connect to MongoDB
connectDB();

// User routes
app.use('/api/users', userRoutes);

//admin routes
app.use('/api/admin', adminRoute)


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
