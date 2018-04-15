
const express = require('express');
const { userCtrl } = require('../controllers');
const { policyCtrl } = require('../controllers');

const router = express.Router();

// Users
router.get('/users', userCtrl.getAll.bind(userCtrl));
router.get('/users/:id', userCtrl.getById.bind(userCtrl));
router.get('/users/byname/:name', userCtrl.getByName.bind(userCtrl));

// Policies
router.get('/policies', policyCtrl.getAll.bind(policyCtrl));
router.get('/policies/:name', policyCtrl.getPoliciesByName.bind(policyCtrl));
router.get('/policies/:id/user', policyCtrl.getUserByPolicy.bind(policyCtrl));

module.exports = router;

