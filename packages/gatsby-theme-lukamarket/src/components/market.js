import React from 'react';

const Market = ({ name, logo, phone, address, products }) => (
  <div>
    <h1>{name}</h1>
    <img src={logo} alt={name} />
    <p>Nos encuentras en: {address}</p>
    <p>Llama al: {phone}</p>
    <h3>Carta:</h3>
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          {product.title} - {product.price}
          <br />
          <img src={product.picture} alt={product.title} />
          <br />
          {product.description}
        </li>
      ))}
    </ul>
  </div>
);

export default Market;
