import { gql } from 'apollo-server'

export const enrollmentSchema = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every book in our data source.
  type Enrollment {
    id: ID!
    student:  User
    studentId: Int  
    class: Class
    classId:   Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    enrollments: [Enrollment]
    enrollment(id: ID!): Enrollment!
  }

`;

