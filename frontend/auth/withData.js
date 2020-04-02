import withApollo from 'next-with-apollo'; // Exposes ApolloClient instance to component tree
import { ApolloClient } from 'apollo-client'; // Entire Apollo package w/ extensions
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloLink, Observable } from 'apollo-link';
import Cookies from 'js-cookie';
// import { URL } from '../config';
// TODO: Add URL
const URL = '';

const cache = new InMemoryCache();

const request = async (operation) => {
  const token = Cookies.get('token');

  operation.setContext({
    headers: {
      authorization: token ? `${token}` : null,
    },
  });
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));
      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const createClient = () => {
  return new ApolloClient({
    ssrMode: true,
    // Assign the server link
    link: ApolloLink.from([
      requestLink,
      createUploadLink({
        uri: URL,
        credentials: 'include',
      }),
    ]),
    cache,
  });
};

export default withApollo(createClient);
