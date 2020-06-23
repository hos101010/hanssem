import React, { useState } from 'react';
import styled from 'styled-components';
import Heart from './Heart';

const BoxStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: white;
    border: solid 1px #e1e1e1;
    min-width: 230px;
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

function Product() {
  const [clicked, setClicked] = useState(false);

  function clickHeart() {
    setClicked(!clicked);
  }

  return (
    <BoxStyled>
      <ImgStyled src="/imgs/1.png" />
      <TitleStyled>유로 601 페블 디자인테이블 1600</TitleStyled>
      <PriceStyled>395,000원</PriceStyled>
      <Heart onClick={clickHeart} clicked={clicked} />
    </BoxStyled>
  );
}

export default Product;
