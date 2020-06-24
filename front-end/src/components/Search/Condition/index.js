import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ConditionBtn from './ConditionBtn';
import Sort from './Sort';
import { orderAscByPrice, orderDescByPrice } from '../orderProducts';

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
  count, dispatchCondition, condition, initialCondition, setProducts,
}) {
  const [clicked, setClicked] = useState(null);
  const [confirmMsg, setConfirmMsg] = useState('');
  const [isDiffCondition, setIsDiffCondition] = useState(false);

  function fetchProductsWithCondition() {
    axios.post(`${process.env.REACT_APP_BACK_URI}/products/condition`, {
      condition,
    })
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
  }

  useEffect(() => {
    function checkDiffConditions() {
      if (JSON.stringify(condition.price) !== JSON.stringify(initialCondition.price)
      || JSON.stringify(condition.xSize) !== JSON.stringify(initialCondition.xSize)
      || JSON.stringify(condition.ySize) !== JSON.stringify(initialCondition.ySize)
      || condition.color) {
        setIsDiffCondition(true);
        changeConfirmMsg();
        return;
      }
      setIsDiffCondition(false);
    }

    function changeConfirmMsg() {
      let tmp = '';

      if (JSON.stringify(condition.price) !== JSON.stringify(initialCondition.price)) { tmp = ` 가격 : ${condition.price[0]}원~${condition.price[1]}원 `; }
      if (JSON.stringify(condition.xSize) !== JSON.stringify(initialCondition.xSize)) { tmp += ` 가로 : ${condition.xSize[0]}cm~${condition.xSize[1]}cm `; }
      if (JSON.stringify(condition.ySize) !== JSON.stringify(initialCondition.ySize)) { tmp += ` 세로 : ${condition.ySize[0]}cm~${condition.ySize[1]}cm `; }
      if (condition.color) { tmp += ` 색상:${condition.color} `; }
      if (tmp !== confirmMsg) setConfirmMsg(tmp);
    }

    checkDiffConditions();
  }, [condition, confirmMsg, initialCondition]);

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
          <button onClick={fetchProductsWithCondition}>검색</button>
          <button onClick={resetCondition}>필터 삭제</button>
        </Confirm>
      ) : null}
    </Div>
  );
}

export default Condition;
