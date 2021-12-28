import { ApolloServer } from 'apollo-server'
import { usersSchema } from "./schema/user";
import { userResolver } from "./resolvers/user"

const typeDefs = [usersSchema]
const resolvers = [userResolver]

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(async ({ url }) => {
  console.log(`\
🚀 Server ready at: ${url}
  `)
})
