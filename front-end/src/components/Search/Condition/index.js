import React, { useState, useEffect } from 'react';
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
    position: relative;
`;

const Confirm = styled.div`
  position: absolute;
  background-color: white;
  bottom:0;
  right: 0;
  width: 600px;
  height: 40px;
  text-align: right;
`;

const conditionName = ['가격', '가로사이즈', '세로사이즈', '색상'];

function Condition({
  count, dispatchCondition, condition, initialCondition,
}) {
  const [clicked, setClicked] = useState(null);
  const [confirmMsg, setConfirmMsg] = useState('');
  const [isDiffCondition, setIsDiffCondition] = useState(false);

  useEffect(() => {
    checkDiffConditions();
  }, [checkDiffConditions, condition]);

  function resetCondition() {
    dispatchCondition({ type: 'reset' });
  }

  function clickButton(idx) {
    if (clicked === idx) resetClicked();
    else setClicked(idx);
  }

  function resetClicked() {
    setClicked(null);
  }

  function checkDiffConditions() {
    if (JSON.stringify(condition) === JSON.stringify(initialCondition)) {
      console.log('same');
      setIsDiffCondition(false);
      return;
    }
    setIsDiffCondition(true);
    changeConfirmMsg();
    return true;
  }

  function changeConfirmMsg() {
    let tmp = '';

    if (condition.price[0] !== initialCondition.price[0]
        || condition.price[1] !== initialCondition.price[1]) { tmp = `가격:${condition.price[0]}원~${condition.price[1]}원 `; }

    if (condition.xSize[0] !== initialCondition.xSize[0]
        || condition.xSize[1] !== initialCondition.xSize[1]) { tmp += `가로사이즈:${condition.xSize[0]}cm~${condition.xSize[1]}cm `; }

    if (condition.ySize[0] !== initialCondition.ySize[0]
        || condition.ySize[1] !== initialCondition.ySize[1]) { tmp += `세로사이즈:${condition.ySize[0]}cm~${condition.ySize[1]}cm `; }

    if (condition.color) { tmp += `색상:${condition.color} `; }

    tmp += `선택 완료. 조회하시겠습니까?`;
    if (tmp !== confirmMsg) setConfirmMsg(tmp);
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
      {(isDiffCondition) ? (
        <Confirm>
          {confirmMsg}
          <button>검색</button>
          <button onClick={resetCondition}>필터 삭제</button>
        </Confirm>
      ) : null}
    </Div>
  );
}

export default Condition;
