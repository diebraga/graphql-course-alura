import { ApolloServer } from 'apollo-server'
import { usersSchema } from "./schema/user";
import { userResolver } from "./resolvers/user"
import { classSchema } from './schema/class';
import { classResolver } from './resolvers/class';
import { mergeTypeDefs } from '@graphql-tools/merge'

const typeDefs = mergeTypeDefs([usersSchema, classSchema])
const resolvers = [userResolver, classResolver]

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(async ({ url }) => {
  console.log(`\
🚀 Server ready at: ${url}
  `)
})
