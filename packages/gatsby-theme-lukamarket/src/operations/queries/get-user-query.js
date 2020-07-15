import { gql } from '@apollo/client';

export const GET_USER_QUERY = gql`
  query getUser($id: String!) {
    user(id: $id) {
      avatar
      email
      name
      phone
      whatsapp
    }
  }
`;
