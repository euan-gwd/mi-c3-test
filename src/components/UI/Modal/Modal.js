import React from 'react';
import Backdrop from './Backdrop';
import './Modal.css';

const Modal = props => {
  return (
    <div>
      <Backdrop show={props.show} hide={props.hide} />
      <div className={props.show ? 'Modal open' : ' Modal close'}>{props.children}</div>
    </div>
  );
};

export default Modal;
