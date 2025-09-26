const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.protectAdmin = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) return next(new AppError('Not authorized', 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const admin = await Admin.findById(decoded.id);
  if (!admin) return next(new AppError('Admin not found', 401));

  req.admin = admin;
  next();
});
