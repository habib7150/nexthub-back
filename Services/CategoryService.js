const Category = require('../Models/Catergory');

class CategoryService {
    async getAllCategories() {
        return await Category.findAll();
    }
    async getCategoryById(categoryID) {
        return await Category.findByPk(categoryID,{include:"products"});
    }

    async createCategory(categoryData) {
        return await Category.create(categoryData);
    }
    async updateCategory(categoryID, categoryData) {
        const category = await Category.findByPk(categoryID);
        if (!category) throw new Error('Category not found');
        return await category.update(categoryData);
    }

      
    async deleteCategory(categoryID) {
        return await Category.destroy({ where: { ca_id: categoryID } });
    }
}

module.exports = new CategoryService();