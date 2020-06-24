import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import ConditionBtn from './ConditionBtn';
import Sort from './Sort';

const Total = styled.div`
`;

const FlexWrap = styled.div`
  display: flex;
  > * {
    margin: 7px;
  };
`;

const Div = styled.div`
    height: 95px;
    margin-bottom: 20px;
    background-color: skyblue;
    display: flex;
    justify-content: space-between;
`;

const conditionName = ['가격', '가로사이즈', '세로사이즈', '색상'];

function Condition({ count, dispatchCondition, condition }) {
  const [clicked, setClicked] = useState(null);

  function clickButton(idx) {
    if (clicked === idx) resetClicked();
    else setClicked(idx);
  }

  function resetClicked() {
    setClicked(null);
  }

  return (
    <Div>
      <Total>
        총
        {' '}
        {count}
        개
      </Total>
      <FlexWrap>
        <Sort dispatchCondition={dispatchCondition} condition={condition} />
        {conditionName.map((cond, idx) => {
          const i = idx + 1;
          return (
            <ConditionBtn
              key={i}
              onClick={() => clickButton(idx)}
              dispatchCondition={dispatchCondition}
              isClicked={(clicked === idx)}
              resetClicked={resetClicked}
              condition={condition}
            >
              {cond}
            </ConditionBtn>
          );
        })}
      </FlexWrap>
    </Div>
  );
}

export default Condition;
