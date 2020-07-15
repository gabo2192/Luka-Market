import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Market from '../components/market/market';

export const query = graphql`
  query($marketID: String!) {
    market(id: { eq: $marketID }) {
      name
      phone
      logo
      address
      slug
      products {
        title
        price
        picture
        description
      }
    }
  }
`;

const MarketTemplate = ({ data: { market } }) => {
  return (
    <Layout>
      <Market {...market} />
    </Layout>
  );
};

export default MarketTemplate;
