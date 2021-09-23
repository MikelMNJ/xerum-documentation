import React from 'react';

export const codeSnippet = (code, block) => (
  <pre className={block ? "block" : "inline"}>
    <code lang="javascript">
      {code}
    </code>
  </pre>
);