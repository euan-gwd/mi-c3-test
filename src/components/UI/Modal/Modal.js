import React from 'react';
import Backdrop from './Backdrop';
import styled from 'styled-components';
import './ModalAnimate.css';

const Modal = props => {
  return (
    <div>
      <Backdrop show={props.show} hide={props.hide} />
      <ModalContent className={props.show ? 'open' : 'close'}>{props.children}</ModalContent>
    </div>
  );
};

const ModalContent = styled.div`
  position: fixed;
  z-index: 10;
  background-color: white;
  width: 50%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 0.25rem;
  left: 25vw;
  top: 25vh;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
`;

export default Modal;
