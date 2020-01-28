import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:8080/graphql',
})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
})

export default client
