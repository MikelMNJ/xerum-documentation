import React from 'react';
import { codeSnippet } from 'helpers/utilityHelpers';
import './SampleBox.scss';

const SampleBox = props => {
  const { name, code, children, className, ...rest } = props;

  return (
    <div className={`sampleBox ${className ? className : ""}`} {...rest}>
        <h4>{name ? `${name} Example` : "Example"}</h4>

        <div className="samples">
          {children}
        </div>

        {codeSnippet(code, true)}
      </div>
  );
};

export default SampleBox;