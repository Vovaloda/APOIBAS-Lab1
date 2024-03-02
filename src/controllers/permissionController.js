const PermissionModel = require('../models/permissionModel');


class PermissionController {
    async getAllPermissions(req, res) {
      try {
        const permissions = await PermissionModel.find().populate('users');
        res.json(permissions);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createPermission(req, res) {
      try {
        const permission = new PermissionModel(req.body);
        const savedPermission = await permission.save();
        res.json(savedPermission);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }

  module.exports = new PermissionController();