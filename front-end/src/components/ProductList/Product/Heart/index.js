import React from 'react';
import styled from 'styled-components';
import FilledHeart from './FilledHeart';
import EmptyHeart from './EmptyHeart';

const Div = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-right: auto;
    margin-left: -10px;
`;

function Heart({ onClick, clicked }) {
  return (
    <Div onClick={onClick}>
      {clicked ? <FilledHeart /> : <EmptyHeart />}
    </Div>
  );
}

export default Heart;
