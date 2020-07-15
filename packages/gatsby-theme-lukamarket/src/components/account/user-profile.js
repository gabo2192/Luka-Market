/**@jsx jsx */
import { jsx } from 'theme-ui';
import { useQuery } from '@apollo/client';

import { GET_USER_QUERY } from '../../operations/queries/get-user-query';

import Loading from '../ui/loading';
import UserForm from '../forms/user-form';

const UserProfile = ({ user }) => {
  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { id: user.sub },
  });
  if (loading) return <Loading />;
  if (!data.user.phone) return <UserForm />;
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UserProfile;
