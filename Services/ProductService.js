const Product = require('../Models/Product');

class ProductService {
    async getAllProducts(){
        return await Product.findAll({include: ['Category']});
    }

    async getProductById(productId){
        return await Product.findByPk(productId, {include: ['Category']});
    }

    async addProduct(productData){
        return await Product.create(productData);
    }

    async updateProduct(productId, productData){
        const product = await Product.findByPk(productId);
        if(!product) throw new Error('Product not found');
        return await product.update(productData);
    }
}

module.exports = new ProductService();