import { HttpLink,ApolloClient, InMemoryCache} from '@apollo/client';

function creatApolloClient(token: string){

  const headers = {
		authorization: token,
	};

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_BOOST_HASURA,
  headers,
});

// const wssLink = new WebSocketLink({
//  uri: "ws://boost.hasura.beansoftwares.com.br/v1/graphql",
//  options: {
//    reconnect: true,
//    connectionParams: {
//      headers:{
//        authorization: `Bearer ${token}`
//      }
//    }
//  },
// });

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//  // wssLink,
//   httpLink
// );

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
return client
}

export default creatApolloClient;



