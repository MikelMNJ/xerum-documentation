import React, { useState } from 'react';
import { buildRows, buildHeaders } from 'helpers/tableHelpers';
import './Table.scss';

const Table = props => {
  const { content, style, className, sortable, defaultSort, draggable, rest } = props;
  const [ ascending, setAscending ] = useState(sortable ? false : null);
  const [ sortedColumn, setSortedColumn ] = useState(sortable && defaultSort || null);

  const columnStyle = {
    gridTemplateColumns: `repeat(${columns()}, 1fr)`,
    ...style,
  };

  const args = {
    headers: content?.headers,
    rows: content?.rows,
    sortable,
    sortedColumn,
    setSortedColumn,
    draggable,
    ascending,
    setAscending,
    columnStyle,
  };

  function columns() {
    const rowKeys = Object.keys(content?.rows?.[0] || {});
    const clickIndex = arr => arr.indexOf("onClick");

    if (clickIndex(rowKeys) !== -1) {
      // Remove onClick function for column calculation.
      rowKeys.splice(clickIndex(rowKeys), 1);
    }

    return rowKeys.length || content?.headers?.length || 1;
  };


  const buildClasses = () => {
    let classList = "table";
    if (className) classList += ` ${className}`;
    return classList;
  };

  return (
    <ul className={buildClasses()} {...rest}>
      <li className="header" style={columnStyle}>
        {buildHeaders(args)}
      </li>

      {content && buildRows(args)}
    </ul>
  );
};

export default Table;