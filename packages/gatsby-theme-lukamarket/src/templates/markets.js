import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import MarketList from '../components/market-list';

const MarketsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarket(sort: { fields: name, order: ASC }) {
        nodes {
          name
          phone
          logo
          address
          slug
        }
      }
    }
  `);
  const markets = data.allMarket.nodes;

  return (
    <Layout>
      <MarketList markets={markets} />
    </Layout>
  );
};

export default MarketsTemplate;
