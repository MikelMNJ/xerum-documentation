import React from 'react';

export const myCode = (code, block) => (
  <pre className={block ? "block" : "inline"}>
    <code lang="javascript">
      {code}
    </code>
  </pre>
);