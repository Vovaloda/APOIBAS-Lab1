const RoleModel = require('../models/roleModel');

class RoleController {
    async getAllRoles(req, res) {
      try {
        const roles = await RoleModel.find().populate('users');
        res.json(roles);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createRole(req, res) {
      try {
        const role = new RoleModel(req.body);
        const savedRole = await role.save();
        res.json(savedRole);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }

  module.exports = new RoleController();