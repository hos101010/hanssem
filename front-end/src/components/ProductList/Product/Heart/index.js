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

function Heart({ onClick, isClicked }) {
  return (
    <Div onClick={onClick}>
      {isClicked ? <FilledHeart /> : <EmptyHeart />}
    </Div>
  );
}

export default Heart;
