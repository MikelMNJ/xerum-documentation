import React from 'react';
import './Modal.scss';

const Modal = props => {
  const { rest } = props;

  return (
    <div {...rest}>
      Modal
    </div>
  );
};

export default Modal;