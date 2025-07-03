import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express()
const port = process.env.PORT || 8000 ;

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Basic route
app.get('/', (req, res) => {
  res.send('Expense Tracker API is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


