import React from 'react';
import { Link } from 'gatsby';

const MarketList = ({ markets }) => (
  <>
    <h1>Restaurantes</h1>
    <ul>
      {markets.map((market) => (
        <li key={market.slug}>
          <strong>
            <Link to={market.slug}>{market.name}</Link>
          </strong>
          <br />
          <img src={market.logo} alt={market.name} />
          <br />
          Ubicado en: {market.address}
          <br />
          Teléfono: {market.phone}
          <br />
        </li>
      ))}
    </ul>
  </>
);
export default MarketList;
