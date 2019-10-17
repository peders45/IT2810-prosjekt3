const { ApolloServer } = require('apollo-server-express');
const app = require('./app');

const typeDefs = require('./graphql/schema/index');
const resolvers = require('./graphql/resolvers/index');

const PORT = process.env.PORt || 3000;

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)