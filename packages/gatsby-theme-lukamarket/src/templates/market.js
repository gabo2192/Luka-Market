import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Market from '../components/market';

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

const MarketTemplate = ({ data: { market } }) => (
  <Layout>
    <Market {...market} />
  </Layout>
);

export default MarketTemplate;
