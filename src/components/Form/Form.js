import React from 'react';
import Button from 'components/Button/Button';
import './Form.scss';

const Form = props => {
  const { submitText, children, ...rest } = props;

  return (
    <form {...rest}>
      {children}
    </form>
  );
};

export default Form;