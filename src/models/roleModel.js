
const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
