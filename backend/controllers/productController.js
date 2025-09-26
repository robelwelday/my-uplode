const fs = require('fs');
const path = require('path');
const Product = require('../models/Product');

// ✅ Get all products
const getProducts = async (req, res) => {
  try {
    const lang = req.query.lang || "en"; // Default to English
    const products = await Product.find().sort({ createdAt: -1 }).lean(); // Sort by creation date (newest first)

    const formatted = products.map((p) => ({
      _id: p._id,
      name: p.name, // Changed: Return entire name object
      description: p.description, // Changed: Return entire description object
      image: p.image,
      available: p.available, // Include availability
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ ok: false, message: err.message });
  }
};

// ✅ Get a single product
const getProductById = async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    const product = await Product.findById(req.params.id).lean();

    if (!product) {
      return res.status(404).json({ ok: false, message: "Product not found" });
    }

    const formatted = {
      _id: product._id,
      name: product.name, // Changed: Return entire name object
      description: product.description, // Changed: Return entire description object
      image: product.image,
      available: product.available, // Include availability
    };

    res.json(formatted);
  } catch (err) {
    console.error("Error fetching product by ID:", err.message);
    res.status(500).json({ ok: false, message: err.message });
  }
};

// ✅ Create a product
const createProduct = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);

    const { name, description, available } = req.body; // Remove price

    if (!JSON.parse(name).en || !JSON.parse(description).en) {
      return res.status(400).json({ ok: false, message: "English name and description are required." });
    }

    const product = new Product({
      name: JSON.parse(name),
      description: JSON.parse(description),
      image: req.file ? `/uploads/${req.file.filename}` : null,
      available: available === 'true', // Keep available
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error("Error creating product:", err.message);
    res.status(500).json({ ok: false, message: err.message });
  }
};

// ✅ Update a product
const updateProduct = async (req, res) => {
  try {
    const { name, description, available } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ ok: false, message: "Product not found" });
    }

    if (name) product.name = JSON.parse(name);
    if (description) product.description = JSON.parse(description);
    if (available !== undefined) product.available = available;

    // Handle image update
    if (req.file) {
      // Delete old image if it exists
      if (product.image) {
        const oldImagePath = path.join(__dirname, '../../', product.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlink(oldImagePath, (err) => {
            if (err) console.error(`Failed to delete old image: ${oldImagePath}`, err.message);
          });
        }
      }
      product.image = `/uploads/${req.file.filename}`;
    }

    await product.save();
    res.json(product);
  } catch (err) {
    console.error("Error updating product:", err.message);
    res.status(500).json({ ok: false, message: err.message });
  }
};

// ✅ Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ ok: false, message: "Product not found" });
    }

    // Delete the associated image file if it exists
    if (product.image) {
      const imagePath = path.join(__dirname, '../../', product.image);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(`Failed to delete image file: ${imagePath}`, err.message);
        }
      });
    }

    res.json({ ok: true, message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct, // Add this export
  deleteProduct,
};
