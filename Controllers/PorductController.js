const ProductService = require('./Services/ProductService');

class ProductController {
    async getAllProducts(request, response) {
        try {
            const products = await ProductService.getAllProducts();
            response.json(products);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
    async getProductById(request, response) {
        try {
            const product = await ProductService.getProductById(request.params.id);
            response.json(product);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
    async addProduct(request, response) {
        try {
            const product = await ProductService.addProduct(request.body);
            response.json(product);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
    async updateProduct(request, response) {
        try {
            const product = await ProductService.updateProduct(request.params.id, request.body);
            response.json(product);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
    async deleteProduct(request, response) {
        try {
            await ProductService.deleteProduct(request.params.id);
            response.status(204).send();
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProductController();

