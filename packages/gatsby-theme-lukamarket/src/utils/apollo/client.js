import React, { useState, useEffect } from 'react';
import { ApolloClient, ApolloProvider, HttpLink } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from '@apollo/link-context';

import { cache } from './cache';

export const ApolloWrapper = ({ children }) => {
  const [bearerToken, setBearerToken] = useState('');
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  useEffect(() => {
    const getToken = async () => {
      const token = isAuthenticated ? await getIdTokenClaims() : '';
      setBearerToken(token.__raw);
    };
    getToken();
  }, [getIdTokenClaims, isAuthenticated]);

  const link = new HttpLink({
    uri: 'https://lukamarket-hasura.herokuapp.com/v1/graphql',
  });

  const authLink = setContext((_, { headers, ...rest }) => {
    if (!bearerToken) return { headers, ...rest };

    return {
      ...rest,
      headers: {
        ...headers,
        Authorization: `Bearer ${bearerToken}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(link),
    cache: cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
