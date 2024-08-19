const CategorieService = require('../Services/CategoryService');

class CategoryController {

    async getAllCategories(request, response) {
        try {
            const categories = await CategoryService.getAllCategories();
            response.json(categories);
        } catch (error) {
            response.status(500).json({ error: "Une erreur est survenue lors de la récupération des catégories." });
        }
    
}

    async getCategoryById(request, response) {
        try {
            const category = await CategoryService.getCategoryById(request.params.id);
            response.json(category);
        } catch (error) {
            response.status(500).json({ error: "Une erreur est survenue lors de la récupération de la catégorie" });
        }
    }

    async addCategory(request, response) {
        try {
            const category = await CategoryService.addCategory(request.body);
            response.json(category);
        } catch (error) {
            response.status(500).json({ error: "Une erreur est survenue lors de l'ajout de la catégorie" });
        }
    }

    async updateCategory(request, response) {
        try {
            const category = await CategoryService.updateCategory(request.params.id, request.body);
            response.json(category);
        } catch (error) {
            response.status(500).json({ error: "Une erreur est survenue lors de la modification de la catégorie" });
        }
    }

    async deleteCategory(request, response) {
        try {
            const category = await CategoryService.deleteCategory(request.params.id);
            response.json(category);
        } catch (error) {
            response.status(500).json({error: "Une erreur est survenue lors de la suppression de la catégorie"});
        }
    }

}

module.exports = new CategoryController();