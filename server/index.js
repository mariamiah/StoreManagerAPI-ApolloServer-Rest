const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const StoreManagerAPI = require('../datasources/StoreManagerAPI');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        storeAPI: new StoreManagerAPI()
    })
})

server.listen().then(() => {
    console.log(`
    Server is running!
    Listening on port 4000
    `)
})