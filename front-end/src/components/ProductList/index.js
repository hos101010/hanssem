import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const Div = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 1050px;
    height: 80rem;    
`;

function ProductList({ products }) {
  return (
    <Div>
      {products.map((prod, i) => (
        <Product
          key={prod.id}
          img={prod.img}
          name={prod.prod_name}
          price={prod.price}
          size_x={prod.size_x}
          size_y={prod.size_y}
        />
      ))}
    </Div>
  );
}

export default ProductList;
