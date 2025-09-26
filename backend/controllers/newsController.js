const News = require('../models/News');
const fs = require('fs');
const path = require('path');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

// Get all news items
const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 }).lean();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single news item by ID
const getNewsById = async (req, res) => {
  try {
    const newsItem = await News.findById(req.params.id).lean();
    if (!newsItem) {
      return res.status(404).json({ message: 'News item not found' });
    }
    res.json(newsItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a news item
const createNews = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNews = new News({
      title: JSON.parse(title),
      content: JSON.parse(content),
      coverImage: req.file ? `/uploads/${req.file.filename}` : null,
    });
    await newNews.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a news item
const updateNews = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newsItem = await News.findById(req.params.id);

    if (!newsItem) {
      return res.status(404).json({ message: 'News item not found' });
    }

    if (title) newsItem.title = JSON.parse(title);
    if (content) newsItem.content = JSON.parse(content);

    // Handle image update
    if (req.file) {
      // Delete old image if it exists
      if (newsItem.coverImage) {
        const oldImagePath = path.join(__dirname, '../../', newsItem.coverImage);
        if (fs.existsSync(oldImagePath)) {
          fs.unlink(oldImagePath, (err) => {
            if (err) console.error(`Failed to delete old image: ${oldImagePath}`, err.message);
          });
        }
      }
      newsItem.coverImage = `/uploads/${req.file.filename}`;
    }

    await newsItem.save();
    res.json(newsItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a news item
const deleteNews = async (req, res) => {
  try {
    const newsItem = await News.findByIdAndDelete(req.params.id);
    if (!newsItem) {
      return res.status(404).json({ message: 'News item not found' });
    }

    if (newsItem.coverImage) {
      const imagePath = path.join(__dirname, '../../', newsItem.coverImage);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(`Failed to delete image file: ${imagePath}`, err.message);
        }
      });
    }
    res.json({ message: 'News item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
};
