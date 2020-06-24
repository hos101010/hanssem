import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductList from '../ProductList';
import Condition from './Condition';

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1050px;
`;

const initialCondition = {
  sort: 'date',
  price: [0, 3000000],
  xSize: [0, 500],
  ySize: [0, 500],
  color: null,
};

const useConditionReducer = (state, action) => {
  switch (action.type) {
    case 'reset': {
      return initialCondition;
    }
    case 'changeSort': {
      return { ...state, sort: action.sort };
    }
    case 'changePrice': {
      return { ...state, price: [parseInt(action.min), parseInt(action.max)] };
    }
    case 'changeXSize': {
      return { ...state, xSize: [parseInt(action.min), parseInt(action.max)] };
    }
    case 'changeYSize': {
      return { ...state, ySize: [parseInt(action.min), parseInt(action.max)] };
    }
    case 'changeColor': {
      return { ...state, color: action.color };
    }
    default: {
      throw new Error(`unexpected action.type: ${action.type}`);
    }
  }
};

function Search() {
  const [condition, dispatchCondition] = useReducer(useConditionReducer, initialCondition);
  const [products, setProducts] = useState([]);

  function fetchProducts() {
    axios.post(`${process.env.REACT_APP_BACK_URI}/products`)
      .then((response) => {
        setProducts([...response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <FlexWrap>
      <Condition count={products.length} dispatchCondition={dispatchCondition} condition={condition} initialCondition={initialCondition} />
      {(products.length > 0) ? <ProductList products={products} /> : null}
    </FlexWrap>
  );
}

export default Search;
