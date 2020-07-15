import React from 'react';
import { Router } from '@reach/router';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

import Loading from '../components/ui/loading';
import Layout from '../components/layout';
import UserProfile from '../components/account/user-profile';

const App = () => {
  const { user } = useAuth0();
  return (
    <Layout>
      <Router basepath="/app">
        <UserProfile path="/" user={user} />
      </Router>
    </Layout>
  );
};

export default withAuthenticationRequired(App, {
  onRedirecting: () => (
    <Layout>
      <Loading />
    </Layout>
  ),
});
