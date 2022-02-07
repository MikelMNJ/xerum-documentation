import React, { useState } from 'react';
import { buildRows, buildHeaders } from 'helpers/tableHelpers';
import colors from 'theme/colors.scss';
import './Table.scss';

const labelPresent = rows => {
  const hasLabel = rows => rows?.find(obj => (
    Object.keys(obj).includes("label")
  ));

  if (hasLabel(rows)) return `1.5rem solid ${colors.deepBlue}`;
  return "inherit";
};

const Table = props => {
  const { content, style, className, sortable, defaultSort, draggable, rest } = props;
  const [ ascending, setAscending ] = useState(sortable ? false : null);
  const [ sortedColumn, setSortedColumn ] = useState(sortable && defaultSort || null);

  const labelStyle = { borderLeft: labelPresent(content?.rows) };
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
    labelStyle,
  };

  function columns() {
    const ignoredKeys = [ "onClick", "label" ];
    const rowKeys = Object.keys(content?.rows?.[0] || {});
    const index = key => rowKeys.indexOf(key);

    ignoredKeys.forEach(key => {
      if (index(key) !== -1) {
        // Remove key for column calculation.
        rowKeys.splice(index(key), 1);
      }
    });

    return rowKeys.length || content?.headers?.length || 1;
  };


  const buildClasses = () => {
    let classList = "table";
    if (className) classList += ` ${className}`;
    return classList;
  };

  return (
    <ul className={buildClasses()} {...rest}>
      {buildHeaders(args)}
      {content && buildRows(args)}
    </ul>
  );
};

export default Table;