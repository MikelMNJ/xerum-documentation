import React from 'react';
import './SampleBox.scss';

const SampleBox = props => {
  const { name, code, children } = props;

  return (
    <div className="sampleBox">
        <h4>{name ? `<${name} />` : "Example"}</h4>

        <div className="samples">
          {children}
        </div>

        <pre>
          <code lang="javascript">
            {code}
          </code>
        </pre>
      </div>
  );
};

export default SampleBox;