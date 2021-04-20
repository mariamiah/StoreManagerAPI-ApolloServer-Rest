module.exports = {
    Query: {
        products: (_, __, { dataSources }, info) => 
            dataSources.storeAPI.getProducts(),
        product: (_, {id}, {dataSources}, info) =>
            dataSources.storeAPI.getProductById(id)
    }
}