const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const scrapeTrends = require('./selenium');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
connectDB();

// MongoDB Model
const Trend = mongoose.model('Trend');

// Route to trigger Selenium script
app.post('/run-script', async (req, res) => {
  try {
    const data = await scrapeTrends();
    res.json({ message: 'Script executed successfully!', data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to execute script' });
  }
});

// Route to fetch latest trends
app.get('/get-trends', async (req, res) => {
  try {
    const latestRecord = await Trend.findOne().sort({ timestamp: -1 });
    if (latestRecord) {
      res.json(latestRecord);
    } else {
      res.status(404).json({ error: 'No data available' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start Server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
