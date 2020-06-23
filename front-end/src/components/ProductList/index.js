import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Product from './Product';
import { ERR } from '../../const/err';

const Div = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 1170px;
    height: 80rem;
    
`;

function ProductList() {
  const [products, setProducts] = useState([]);
  const [err, setErr] = useState(false);

  function fetchProducts() {
    axios.post(`${process.env.REACT_APP_BACK_URI}/products`)
      .then((response) => {
        setProducts([...response.data]);
        setErr(false);
      })
      .catch(() => setErr(true));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (err) return <div>{ERR.NETWORK}</div>;
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
