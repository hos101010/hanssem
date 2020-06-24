import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import makeModal from '../../../../globalComponents/Modal';
import Button from '../Button.style';
import { colorMatch } from '../../../../../const/color';

const colors = ['black', 'white', 'brown', 'pink', 'red', 'navy', 'purple', 'darkgreen'];

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    width: 205px;
    height: 100px;
`;

const ColorStyle = styled.div`
    margin: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    ${(props) => ((props.color === 'white') ? 'border: 1px solid lightgray' : null)};
    background-color: ${(props) => (colorMatch[props.color])};
    cursor: pointer;
`;

function Color({
  dispatchCondition, resetClicked, condition,
}) {
  const [pickedColor, setPickedColor] = useState(condition.color);

  const clickSave = () => {
    dispatchCondition({ type: 'changeColor', color: pickedColor });
    resetClicked();
  };

  const clickReset = () => {
    setPickedColor(null);
  };

  const changeColor = (color) => {
    setPickedColor(color);
  };

  const Body = () => (
    <Div>
      {colors.map((color) => ((color !== pickedColor) ? <ColorStyle color={color} key={color} onClick={() => changeColor(color)} />
        : (color === 'white') ? <AiOutlineCheckCircle key={color} size="47" />
          : <AiFillCheckCircle key={color} size="47" color={colorMatch[color]} />
      ))}
    </Div>
  );
  const Footer = () => (
    <>
      <Button style={{ 'margin-top': 0 }} onClick={clickReset}>선택해제</Button>
      <Button style={{ 'margin-top': 0 }} onClick={clickSave}>저장</Button>
    </>
  );
  const Modal = makeModal(Body, Footer);

  return <Modal />;
}

export default Color;
