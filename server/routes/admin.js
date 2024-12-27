const express = require('express');
const adminController = require('../controllers/admin-controller');
const verifyToken = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin-middleware');
const router = express.Router();

// Routes for admin operations
router.route('/users').get(adminController.getAllusers);
router.route('/contacts').get(adminController.getAllcontacts);

// DELETE route for deleting a user by ID
router.route('/users/:id').delete(adminController.deleteUser);

//UPDATE user from ID
router.route('/users/:id').put(adminController.updateUser);

module.exports = router;
