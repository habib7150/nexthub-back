const express = require('express');
const router = express.Router();
const CategotiyController = require('../Controllers/CategoryController');

// Get all categories

router.get("/",(request,response) => {CategotiyController.getAllCategories(request,response)});

// Get single category

router.get("/:id",(request,response) => {CategotiyController.getCategoryById(request,response)});

// Add new category

router.post("/",(request,response) => {CategotiyController.addCategory(request,response)});

// Update a category

router.put("/:id",(request,response) => {CategotiyController.updateCategory(request,response)});

// Delete a category

router.delete("/:id",(request,response) => {CategotiyController.deleteCategory(request,response)});

module.exports = router;

