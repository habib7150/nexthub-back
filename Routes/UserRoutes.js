const express = require('express');
const UserController = require('./Controllers/UserController');

const router = express.Router();

// User routes

router.get('/',(request, response) => {UserController.getAllUsers(request, response);});

router.get('/:id',(request, response) => {UserController.getUserById(request, response);});

router.post('/',(request, response) => {UserController.createUser(request, response);});

router.put('/:id',(request, response) => {UserController.updateUser(request, response);});

router.delete('/:id',(request, response) => {UserController.deleteUser(request, response);});

module.exports = router;