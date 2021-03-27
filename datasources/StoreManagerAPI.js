const { RESTDataSource } = require('apollo-datasource-rest');

class StoreManagerAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://store-manager-api-deploy.herokuapp.com/api/v2/'
    }

    async getProducts() {
        const response = await this.get('products')
        return Array.isArray(response) ? response.map(product => this.productReducer(product)):[];
    }

    productReducer(product) {
        return {
            id: product.product_id || 0,
            price: product.price,
            name: product.product_name,
            quantity: product.product_quantity,
            dateAdded: product.date_added
        }
    }

    async getProductById({productId}) {
        const response = await this.get('products', {product_id: productId})
        return this.productReducer(response[0])
    }

    getProductsByIds({productIds}) {
        return Promise.all(
            productIds.map(productId => this.getProductById({productId})),
        )
    }

    async createUser({ username, password }) {
        const response = await this.post('auth/login', {username, password})
        return this.userReducer(response[0])
    }

    userReducer(user) {
        return {
            token: user.token
        }
    }

}

module.exports = StoreManagerAPI;