import React from 'react';
import { buildRows } from 'helpers/tableHelpers';
import './Table.scss';

const Table = props => {
  const { content, style, className, rest } = props;

  const columns = Object.keys(content?.rows?.[0] || {}).length
    || content?.headers?.length
    || 1;

  const columnStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    ...style,
  };

  const buildHeaders = () => {
    if (content) {
      return content?.headers?.map((header, index) => (
        <div key={index}>
          {header}
        </div>
      ));
    }
  };

  const buildClasses = () => {
    let classList = "table";

    if (className) classList += ` ${className}`;

    return classList;
  };

  return (
    <ul className={buildClasses()} {...rest}>
      <li className="header" style={columnStyle}>
        {buildHeaders()}
      </li>

      {buildRows(content?.rows, content?.headers, columnStyle)}
    </ul>
  );
};

export default Table;