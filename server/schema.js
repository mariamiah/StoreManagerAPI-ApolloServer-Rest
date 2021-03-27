const { gql } = require('apollo-server');
const typeDefs = gql`
    scalar Date

    type Query {
        products: [Product]!
        product(id:ID!): Product
        me: User
    }

    type Mutation {
        login(email:String, password: String): User
        addProducts(productIds:[ID]!):ProductAddResponse!
    }

    type User {
        id: ID!
        token: String
        role: String
    }

    type Product {
        id: ID!
        price: String
        name: String
        quantity: Int
        dateAdded: Date
    }

    type ProductAddResponse {
        message: String

    }
`
module.exports = typeDefs;
