import React from 'react';

export const codeSnippet = (code, block) => (
  <pre className={block ? "block" : "inline"}>
    <code lang="javascript">
      {code}
    </code>
  </pre>
);

export const addEvent = (name, func) => {
  window.addEventListener(name, e => func(e));
};

export const removeEvent = (name, func) => {
  window.removeEventListener(name, e => func(e));
};

export const formatNum = (val, digits) => (
  val.toLocaleString('en-US', { minimumIntegerDigits: digits || 2 })
);

export const stringToArray = string => {
  const prep = string.replace(/[\\W_,-]/g, "");
  const words = prep.split(' ');

  return words;
}