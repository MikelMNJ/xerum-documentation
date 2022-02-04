import React from 'react';
import { buildRows, buildHeaders } from 'helpers/tableHelpers';
import './Table.scss';

const Table = props => {
  const { content, style, className, rest } = props;

  const columns = () => {
    const rowKeys = Object.keys(content?.rows?.[0] || {});
    const clickIndex = arr => arr.indexOf("onClick");

    if (clickIndex(rowKeys) !== -1) {
      // Remove onClick function for column calculation.
      rowKeys.splice(clickIndex(rowKeys), 1);
    }

    return rowKeys.length || content?.headers?.length || 1;
  };

  const columnStyle = {
    gridTemplateColumns: `repeat(${columns()}, 1fr)`,
    ...style,
  };

  const buildClasses = () => {
    let classList = "table";
    if (className) classList += ` ${className}`;
    return classList;
  };

  return (
    <ul className={buildClasses()} {...rest}>
      <li className="header" style={columnStyle}>
        {buildHeaders(content?.headers)}
      </li>

      {buildRows(content?.rows, content?.headers, columnStyle)}
    </ul>
  );
};

export default Table;