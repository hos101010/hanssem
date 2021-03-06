import React from 'react';
import styled from 'styled-components';
import Boundary from './Boundary';
import Color from './Color';
import Button from './Button.style';

const Div = styled.div`
    position: relative;
`;

function ConditionBtn({
  children, onClick, dispatchCondition, isClicked, resetClicked, condition,
}) {
  const Modal = () => {
    if (children.includes('색상')) return <Color dispatchCondition={dispatchCondition} resetClicked={resetClicked} condition={condition} />;
    return <Boundary tag={children} dispatchCondition={dispatchCondition} resetClicked={resetClicked} condition={condition} />;
  };

  return (
    <Div>
      <Button onClick={onClick} isClicked={isClicked}>{children}</Button>
      {isClicked ? <Modal /> : null}
    </Div>
  );
}

export default ConditionBtn;
