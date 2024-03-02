const express = require('express');
const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');
const permissionController = require('../controllers/permissionController');
const articleController = require('../controllers/articleController');
const commentController = require('../controllers/commentController');

const router = express.Router();

// Users
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

// Roles
router.get('/roles', roleController.getAllRoles);
router.post('/roles', roleController.createRole);

// Permissions
router.get('/permissions', permissionController.getAllPermissions);
router.post('/permissions', permissionController.createPermission);

// Articles
router.get('/articles', articleController.getAllArticles);
router.post('/articles', articleController.createArticle);

// Comments
router.get('/comments', commentController.getAllComments);
router.post('/comments', commentController.createComment);

module.exports = router;
