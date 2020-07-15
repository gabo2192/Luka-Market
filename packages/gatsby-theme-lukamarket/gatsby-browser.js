import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';
import ApolloWrapper from './src/utils/apollo/client';

const onRedirectCallback = (appState) => {
  navigate(appState ? appState.targetUrl || appState.returnTo : '/');
  console.log(appState);
};

export const wrapRootElement = ({ element }) => (
  <Auth0Provider
    domain={process.env.GATSBY_DOMAIN}
    clientId={process.env.GATSBY_CLIENT_ID}
    audience={process.env.GATSBY_AUDIENCE}
    scope="read:current_user update:current_user_metadata"
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <ApolloWrapper>{element}</ApolloWrapper>
  </Auth0Provider>
);
