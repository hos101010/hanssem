import React, { useState } from 'react';
import makeModal from '../../../../globalComponents/Modal';
import Slide from '../../../../globalComponents/Slide';

function setInfoByTag(tag) {
  let info;
  if (tag.includes('가로사이즈')) {
    info = {
      type: 'changeXSize',
      tag: 'xSize',
      minVal: 0,
      maxVal: 500,
      step: 10,
    };
  } else if (tag.includes('세로사이즈')) {
    info = {
      type: 'changeYSize',
      tag: 'ySize',
      minVal: 0,
      maxVal: 500,
      step: 10,
    };
  } else if (tag.includes('가격')) {
    info = {
      type: 'changePrice',
      tag: 'price',
      minVal: 0,
      maxVal: 3000000,
      step: 50000,
    };
  }
  return info;
}

function Boundary({
  tag, dispatchCondition, resetClicked, condition,
}) {
  const [info, setInfo] = useState(setInfoByTag(tag));

  const Body = () => (
    <Slide
      dispatchCondition={dispatchCondition}
      initMin={condition[info.tag][0]}
      initMax={condition[info.tag][1]}
      info={info}
      resetClicked={resetClicked}
    />
  );
  const Modal = makeModal(Body, null);

  return <Modal />;
}

export default Boundary;
