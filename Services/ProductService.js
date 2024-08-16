const Product = require('../Models/Product');

class ProductService {
    async getAllProducts(){
        return await Product.findAll({include: ["category"]});
    }
}