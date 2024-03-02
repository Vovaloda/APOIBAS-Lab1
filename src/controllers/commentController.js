const CommentModel = require('../models/commentModel');

class CommentController {
    async getAllComments(req, res) {
      try {
        const comments = await CommentModel.find().populate('user').populate('article');
        res.json(comments);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createComment(req, res) {
      try {
        const comment = new CommentModel(req.body);
        const savedComment = await comment.save();
        res.json(savedComment);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }

  module.exports = new CommentController()