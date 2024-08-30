import { cacheExchange, createClient, fetchExchange } from "@urql/core";

const client = createClient({
  url: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT,
  fetchOptions: () => {
    return {
      headers: { "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET },
    };
  },
  exchanges: [cacheExchange, fetchExchange],
});

export default client;
