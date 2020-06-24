import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    font-size: 15px;
    > * {
        height: 20px;
        margin: 5px;
        margin-top: 20px;
        color: #555555;
    }
`;

const A = styled.div`
    cursor: pointer;
    font-weight: ${(props) => (props.condition.sort === props.tag ? '900' : 'normal')};
    color: ${(props) => (props.condition.sort === props.tag ? 'black' : '#555555')};
`;

function Sort({ dispatchCondition, condition }) {
  const changeSort = (tag) => dispatchCondition({ type: 'changeSort', sort: tag });
  return (
    <Div>
      <A condition={condition} tag="date" onClick={() => changeSort('date')}>등록순</A>
      <div>|</div>
      <A condition={condition} tag="highPrice" onClick={() => changeSort('highPrice')}>높은가격순</A>
      <div>|</div>
      <A condition={condition} tag="lowPrice" onClick={() => changeSort('lowPrice')}>낮은가격순</A>
    </Div>
  );
}

export default Sort;
