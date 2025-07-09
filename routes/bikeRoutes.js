import express from 'express';
import Bike from '../models/Bike.js';

const router = express.Router();

// POST - Add new bike
router.post('/', async (req, res) => {
  try {
    const newBike = new Bike(req.body);
    await newBike.save();
    res.status(201).json({ message: 'Bike added successfully', bike: newBike });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add bike', details: error.message });
  }
});

// GET - All bikes
router.get('/', async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.status(200).json(bikes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bikes', details: error.message });
  }
});

export default router;