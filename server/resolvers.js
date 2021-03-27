module.exports = {
    Query: {
        products: (_, __, { dataSources }) => 
            dataSources.storeAPI.getProducts(),
        product: (_,{id}, {dataSources}) =>
            dataSources.StoreManagerAPI.getProductById({ productId: id}),
        me: (_,__, { dataSources }) => dataSources.storeAPI.createUser()
    }
}