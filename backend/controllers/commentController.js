const Comment = require('../models/Comment');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.addComment = catchAsync(async (req, res) => {
  const { productId, userName, text } = req.body;
  if (!productId || !userName || !text) throw new AppError('Missing fields', 400);
  const comment = await Comment.create({ product: productId, userName, text });
  res.status(201).json(comment);
});

exports.replyComment = catchAsync(async (req, res, next) => {
  const { reply } = req.body;
  const comment = await Comment.findById(req.params.id);
  if (!comment) return next(new AppError('Comment not found', 404));
  comment.reply = reply;
  await comment.save();
  res.json(comment);
});
