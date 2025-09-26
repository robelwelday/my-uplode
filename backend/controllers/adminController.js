const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

const signToken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

exports.loginAdmin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email }); // Retrieves admin by email from the database
  if (!admin || !(await admin.correctPassword(password, admin.password))) {
    return next(new AppError('Incorrect email or password', 401)); // Validates password
  }
  const token = signToken(admin._id); // Generates a token for the authenticated admin
  res.json({ ok: true, token });
});
exports.addAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(400).json({ ok: false, message: 'Admin already exists' });
    }

    const newAdmin = await Admin.create({ email, password });
    res.status(201).json({ ok: true, admin: { id: newAdmin._id, email: newAdmin.email } });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
};