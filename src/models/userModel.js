
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }],
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
