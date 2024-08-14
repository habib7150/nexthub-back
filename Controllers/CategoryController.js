const CategorieService = require('../Services/CategoryService');

class CategoryController {

    async getAllCategories(request, response) {
        try {
            const categories = await CategoryService.getAllCategories();
            response.json(categories);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    
}

    async getCategoryById(request, response) {
        try {
            const category = await CategoryService.getCategoryById(request.params.id);
            response.json(category);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async addCategory(request, response) {
        try {
            const category = await CategoryService.addCategory(request.body);
            response.json(category);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async updateCategory(request, response) {
        try {
            const category = await CategoryService.updateCategory(request.params.id, request.body);
            response.json(category);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async deleteCategory(request, response) {
        try {
            const category = await CategoryService.deleteCategory(request.params.id);
            response.json(category);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

}

module.exports = new CategoryController();