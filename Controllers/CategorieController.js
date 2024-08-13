const CategorieService = require('../Services/CategorieService');

class CategorieController {

    async getAllCategories(request, response) {
        try {
            const categories = await CategorieService.getAllCategories();
            response.json(categories);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    
}

    async getCategoryById(request, response) {
        try {
            const category = await CategorieService.getCategoryById(request.params.id);
            response.json(category);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async addCategory(request, response) {
        try {
            const category = await CategorieService.addCategory(request.body);
            response.json(category);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async updateCategory(request, response) {
        try {
            const category = await CategorieService.updateCategory(request.params.id, request.body);
            response.json(category);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async deleteCategory(request, response) {
        try {
            const category = await CategorieService.deleteCategory(request.params.id);
            response.json(category);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

}

module.exports = new CategorieController();