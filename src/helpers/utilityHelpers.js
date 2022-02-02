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

export const formatNum = (val, maxFraction, minFraction) => (
  val.toLocaleString('en-US', {
    maximumFractionDigits: maxFraction || 2,
    minimumFractionDigits: minFraction || 2,
  })
);

export const truncate = (num, limit) => {
  num = num === 0 || !num ? "0.00000000" : num.toString();
  const hasFloatVal = num?.includes('.');

  if (hasFloatVal) {
    const split = num.split('.');
    const int = (+(split[0])).toLocaleString('en-US');
    const float = split[1].slice(0, limit ?? 2);
    const truncatedVal = `${int}${limit === 0 ? "" : "."}${float}`;

    return truncatedVal;
  };

  return (+(num)).toLocaleString('en-US');
};

export const stringToArray = string => {
  const prep = string.replace(/[\\W_,]/g, "");
  const words = prep.split(' ');

  return words;
};

export const lowercaseArray = arr => {
  return arr.map(item => {
    if (typeof item === "string") return item.toLowerCase();
    return item;
  });
};