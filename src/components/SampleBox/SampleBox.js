import React from 'react';
import { codeSnippet } from 'helpers/utilityHelpers';
import './SampleBox.scss';

const SampleBox = props => {
  const { name, code, children } = props;

  return (
    <div className="sampleBox">
        <h4>{name ? `<${name} />` : "Example"}</h4>

        <div className="samples">
          {children}
        </div>

        {codeSnippet(code, true)}
      </div>
  );
};

export default SampleBox;