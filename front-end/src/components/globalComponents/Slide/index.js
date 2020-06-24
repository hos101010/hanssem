import React, { useState } from 'react';
import styled from 'styled-components';
import { numberWithCommas } from '../../../utils';
import Button from '../../Search/Condition/ConditionBtn/Button.style';

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
`;

const FlexRowWrap = styled.div`
  display: flex;
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

const Track = styled.input.attrs((props) => ({
  type: 'range',
  min: props.minVal,
  max: props.maxVal,
  step: props.step,
}))`
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

function Slide({
  dispatchCondition, initMin, initMax, info, resetClicked,
}) {
  const [left, setLeft] = useState(initMin);
  const [right, setRight] = useState(initMax);

  const clickSave = () => {
    dispatchCondition({ type: info.type, min: left, max: right });
    resetClicked();
  };
  const clickCancle = () => {
    dispatchCondition({ type: info.type, min: info.minVal, max: info.maxVal });
  };

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
  function a() {}
  function setValue(val) {
    if (info.tag === 'price') return `${numberWithCommas(val)}원`;
    return `${numberWithCommas(val)}cm`;
  }

  return (
    <FlexWrap>
      <FlexWrap>
        <Div>
          <Track
            onChange={clickTrack}
            onMouseUp={() => (firstClickedButtonIsRight = null)}
            min={info.minVal}
            max={info.maxVal}
            step={info.step}
          />
          <Range
            min={info.minVal}
            max={info.maxVal - info.step}
            step={info.step}
            onChange={(e) => moveLeft(e)}
            value={left}
          />
          <Range
            min={info.minVal + info.step}
            max={info.maxVal}
            step={info.step}
            onChange={(e) => moveRight(e)}
            value={right}
          />
        </Div>
        <div>
          <Input type="text" onChange={a} value={setValue(left)} />
          -
          <Input type="text" onChange={a} value={setValue(right)} />
        </div>
      </FlexWrap>
      <FlexRowWrap>
        <Button onClick={clickCancle}>선택해제</Button>
        <Button onClick={clickSave}>저장</Button>
      </FlexRowWrap>
    </FlexWrap>
  );
}
export default Slide;
