import React from 'react';
import { Field, getIn } from 'formik';
import { isEmpty } from 'lodash';
import './FieldError.scss';

const FieldError = props => {
  const { name } = props;

  const buildFieldError = () => {
    if (name) {
      return (
        <Field name={name}>
          {({ form }) => {
            const { errors, touched } = form;
            const msg = getIn(errors, name);
            const isTouched = getIn(touched, name);
            const showError = !isEmpty(msg) && isTouched;

            if (showError) {
              return (
                <div className="fieldError">
                  {msg}
                </div>
              );
            }
          }}
        </Field>
      );
    }
  };

  return buildFieldError();
};

export default FieldError;