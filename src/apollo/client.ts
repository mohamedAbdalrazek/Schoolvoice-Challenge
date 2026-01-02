import { HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloClient} from "@apollo/client";
export const client = new ApolloClient({
  link: new HttpLink({ uri: import.meta.env.VITE_API_ENDPOINT }), 
  cache: new InMemoryCache(), // Caches query results in memory
});