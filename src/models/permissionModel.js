
const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  name: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;
