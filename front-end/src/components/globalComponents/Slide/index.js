import React, { useState } from 'react';

import styled from 'styled-components';

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
`;
const Div = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 250px;
  height: 28px;
  top: 70px;
`;
const Range = styled.input.attrs({
  type: 'range',
})`
  width: 100%;
  position: absolute;
  margin: 0;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 0px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const Track = styled.input.attrs({
  type: 'range',
  min: '0',
  max: '1000000',
  step: '20000',
})`
  -webkit-appearance: none;
  position: absolute;
  margin: 0;
  width: 100%;
  height: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background: green;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
`;

const Input = styled.input`
  width: 100px;
  height : 40px;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  margin: 3px;
  font-size: 13px;
  padding-left: 0.4rem;
`;

let firstClickedButtonIsRight = null;

function a() {}
function Slide() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(1000000);

  function moveLeft(e) {
    if (parseInt(right) >= parseInt(e.target.value)) setLeft(e.target.value);
  }

  function moveRight(e) {
    if (parseInt(e.target.value) >= parseInt(left)) setRight(e.target.value);
  }

  function clickTrack(e) {
    const value = parseInt(e.target.value);
    const leftDistance = Math.abs(value - left);
    const rightDistance = Math.abs(value - right);
    if (leftDistance < rightDistance) {
      if (firstClickedButtonIsRight === true) return;
      if (firstClickedButtonIsRight === null) firstClickedButtonIsRight = false;
      moveLeft(e);
      return;
    }
    if (firstClickedButtonIsRight === false) return;
    if (firstClickedButtonIsRight === null) firstClickedButtonIsRight = true;
    moveRight(e);
  }

  return (
    <FlexWrap>
      <Div>
        <Track
          onChange={clickTrack}
          onMouseUp={() => (firstClickedButtonIsRight = null)}
        />
        <Range
          min="0"
          max="980000"
          step="20000"
          onChange={(e) => moveLeft(e)}
          value={left}
        />
        <Range
          min="20000"
          max="1000000"
          step="20000"
          onChange={(e) => moveRight(e)}
          value={right}
        />
      </Div>
      <div>
        <Input type="text" onChange={a} value={`${left}원`} />
        -
        <Input type="text" onChange={a} value={`${right}원`} />
      </div>
    </FlexWrap>
  );
}
export default Slide;
