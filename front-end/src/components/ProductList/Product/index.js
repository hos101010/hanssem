import React, { useState } from 'react';
import styled from 'styled-components';
import Heart from './Heart';
import { numberWithCommas } from '../../../utils';

const BoxStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: white;
    border: solid 1px #e1e1e1;
    width: 230px;
    height: 350px;
`;

const ImgStyled = styled.img`
    margin: 0 auto;
    src: ${(src) => (src)};
    width: 216px;
    height: 216px;
`;

const TitleStyled = styled.div`
    margin-right: auto;
    font-size: 16px;
    font-weight: 500;
    color: #070707;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 44px;
    overflow: hidden;
    line-height: 22px;
    word-wrap: break-word;
    margin-bottom: 7px;
`;

const PriceStyled = styled.div`
    margin-right: auto;
    font-size: 18px;
    color: #070707;
`;

const Div = styled.div`
  height: 90px;
`;

function Product({
  img, name, price, size_x, size_y,
}) {
  const [isClicked, setClicked] = useState(false);

  function clickHeart() {
    setClicked(!isClicked);
  }

  return (
    <BoxStyled>
      <ImgStyled src={`/imgs/${img}`} />
      <Div>
        <TitleStyled>{name}</TitleStyled>
        <PriceStyled>
          {numberWithCommas(price)}
          원
        </PriceStyled>
      </Div>
      <Heart onClick={clickHeart} isClicked={isClicked} />
    </BoxStyled>
  );
}

export default Product;
