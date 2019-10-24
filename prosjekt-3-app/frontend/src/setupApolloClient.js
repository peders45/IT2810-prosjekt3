import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//Link to database and setup of client using ApolloClient
const httpLink = new HttpLink({
  uri: 'http://it2810-56.idi.ntnu.no:4000/graphql',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export default client;