import { gql } from 'apollo-server'

export const usersSchema = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every book in our data source.
  type User {
    id: ID!
    name: String!
    active: Boolean!
    email: String!
    role: Role
  }

  type Role {
    id: ID!
    type: String!
    users: [User]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    users: [User]
    user(id: ID!): User!

    roles: [Role]
    role(id: ID!): Role!
  }

  type Mutation {
    createUser(name: String!, active: Boolean!, email: String!, roleId: Int): User!
    updateUser(id: ID!, name: String!, active: Boolean!, email: String!, roleId: Int): User!

  }
`;

