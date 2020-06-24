import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductList from '../ProductList';
import Condition from './Condition';
import { orderAscByPrice, orderDescByPrice } from './orderProducts';

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

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_BACK_URI}/products`)
      .then((response) => {
        switch (condition.sort) {
          case 'lowPrice':
            setProducts(orderAscByPrice(response.data));
            break;
          case 'highPrice':
            setProducts(orderDescByPrice(response.data));
            break;
          case 'date':
            setProducts(response.data);
            break;
          default:
            console.log('err: no condition.sort case');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [condition.sort]);

  return (
    <FlexWrap>
      <Condition
        setProducts={setProducts}
        count={products.length}
        dispatchCondition={dispatchCondition}
        condition={condition}
        initialCondition={initialCondition}
      />
      {(products.length > 0) ? <ProductList products={products} /> : null}
    </FlexWrap>
  );
}

export default Search;
