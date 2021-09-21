import React from 'react';
import './Table.scss';

const Table = props => {
  const {
    headers,
    children,
    rest,
  } = props;

  const buildHeaders = () => {
    return headers?.map((header, index) => (
      <div key={index}>
        {header}
      </div>
    ));
  };

  return (
    <ul className="table" {...rest}>
      <li className="header">
        {buildHeaders()}
      </li>

      {children}
    </ul>
  );
};

export default Table;