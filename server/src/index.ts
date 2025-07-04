import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI; // Get MongoDB URI from environment variables

// --- MongoDB Connection ---
if (!mongoUri) {
  console.error('MONGO_URI is not defined in .env file!');
  process.exit(1); // Exit if no MongoDB URI
}

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB Atlas!');
    // Start the server ONLY after successful database connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process on connection failure
  });
// --- End MongoDB Connection ---


// Middleware
app.use(cors());
app.use(express.json());

// Basic route (can be removed later as API routes take over)
app.get('/', (req, res) => {
  res.send('Expense Tracker API is running!');
});

// Note: The app.listen() call has been moved inside the .then() block of mongoose.connect()
