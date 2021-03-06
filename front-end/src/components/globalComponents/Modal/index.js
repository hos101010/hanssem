import React from 'react';
import styled from 'styled-components';

const ModalStyle = styled.div`
    position:absolute;
    top:75px;
    right:10px;
    width:300px;
    height: 200px;
    border-radius: 2rem;
    border: 1px solid lightgray;
    background-color: white;
    display: flex;
    flex-direction: coloumn;
    justify-content: center;
    background-color: #F2F2F2;
`;

const ModalFooter = styled.div`
    position: absolute;
    bottom:20px;
`;

export default function makeModal(Body, Footer) {
  const Modal = () => (
    <ModalStyle>
      {Body ? <Body /> : null}
      <ModalFooter>
        {Footer ? <Footer /> : null}
      </ModalFooter>
    </ModalStyle>
  );

  return Modal;
}
