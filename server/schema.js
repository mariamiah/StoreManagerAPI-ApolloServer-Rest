const { gql } = require('apollo-server');
const typeDefs = gql`
    scalar Date

    type Query {
        products: [Product]!
        product(id:ID!): Product
    }

    type Mutation {
        # login(email:String, password: String): User
        addProducts(productIds:[ID]!):ProductAddResponse!
    }

    type Product {
        id: ID!,
        title: String!,
        description: String,
        addedAt: String,
        productCode: String,
        updatedAt: String,
        price: String,
        category: String,
        quantity: Int
    }

    type ProductAddResponse {
        message: String

    }
`
module.exports = typeDefs;
