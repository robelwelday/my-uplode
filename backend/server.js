require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const compression = require('compression'); // Import compression middleware
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const Admin = require('./models/Admin');
// Routes
const newsRoutes = require('./routes/news');
const productRoutes = require('./routes/products');
const commentRoutes = require('./routes/comments');
const adminRoutes = require('./routes/admin');
const contactRoutes = require('./routes/contact'); // Add contact routes

const app = express();

// Middleware


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(compression()); // Use compression middleware

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
  maxAge: '1d', // Cache for 1 day to reduce requests
  etag: false // Disable ETag for simplicity
}));

// API Routes
app.get('/', (req, res) => {
  res.json({ message: 'Backend API is running. Use /api/* endpoints.' });
});
app.use('/api/news', newsRoutes);
app.use('/api/products', productRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes); // Add contact route

// Error Handling
app.use(notFound);
app.use(errorHandler);

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    
    // Check for and create admin user if needed
    const existingAdmin = await Admin.findOne({ email: "admin@example.com" });
    if (!existingAdmin) {
      await Admin.create({
        username: "admin",
        email: "admin@example.com",
        password: "mypassword123"
      });
      console.log("Admin user created successfully.");
    } else {
      console.log("Admin user already exists.");
    }

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

startServer();

