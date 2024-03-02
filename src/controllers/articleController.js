const ArticleModel = require('../models/articleModel');

class ArticleController {
    async getAllArticles(req, res) {
      try {
        const articles = await ArticleModel.find().populate('author').populate('comments');
        res.json(articles);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createArticle(req, res) {
      try {
        const article = new ArticleModel(req.body);
        const savedArticle = await article.save();
        res.json(savedArticle);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  module.exports = new ArticleController();