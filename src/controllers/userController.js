const UserModel = require('../models/userModel');

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await UserModel.find().populate('roles').populate('permissions');
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUser(req, res) {
    try {
      const user = new UserModel(req.body);
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}


module.exports = new UserController();