import { gql } from 'apollo-server'

export const classSchema = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every book in our data source.
  type Class {
    id: ID!
    description:  String
    vacancies: String  
    startsAt: String
    teacher:   User!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    classes: [Class]
    class(id: ID!): Class!
  }

  type Mutation {
    createClass(description: String!, vacancies: String!, startsAt: String!, teacher: ID!): Class
    updateClass(id: ID!, description: String!, vacancies: String!, startsAt: String!, teacher: ID!): Class
    deleteClass(id: ID!): Class!
  }

`;

