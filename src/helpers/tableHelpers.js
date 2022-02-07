import React, { Fragment } from 'react';
import { startCase } from 'lodash';
import TRow from 'components/Table/TRow';
import TData from 'components/Table/TData';
import colors from 'theme/colors.scss';

export const headers = [ "PROP NAME", "DESCRIPTION", "DEFAULT" ];

const buildData = (obj, headers, draggable) => {
  const { onClick, label, ...rest } = obj;

  return Object.values(rest).map((val, index) => (
    <div key={index} className="inline tdContainer">
      <TData className="fullWidth td">
        <p className="respHeader">
          <strong>
            {startCase(headers?.[index]?.toLowerCase())}
          </strong>: &nbsp;
        </p>

        {val || "—"}
      </TData>

      {draggable && index === Object.values(rest).length - 1 && (
        <Fragment>
          <i className="fa-solid fa-grip-vertical grip" />&nbsp;
        </Fragment>
      )}
    </div>
  ));
};

const sort = (rows, headerIndex, ascending) => {
  const sorted = rows?.sort((a, b) => {
    const key = Object.keys(a)[headerIndex];
    const val1 = a[key];
    const val2 = b[key];

    if (val1 === null) return 0;
    if (val1 < val2 || val2 === null) return ascending ? -1 : 1;
    if (val1 > val2) return ascending ? 1 : -1;

    return 0;
  });

  return sorted || rows;
};

export const buildHeaders = args => {
  const {
    headers,
    rows,
    sortable,
    sortedColumn,
    setSortedColumn,
    ascending,
    setAscending,
    columnStyle,
    labelStyle,
  } = args;

  const headerStyle = { cursor: `${sortable ? "pointer" : "default"}` };
  const mainStyle = { ...columnStyle, ...labelStyle };

  const handleSort = (header, index) => {
    // TODO: on dragEnd setSortedColumn(null);
    if (sortedColumn !== header) setSortedColumn(header);

    if (sortable) {
      const newArr = sort(rows, index, ascending);
      setAscending(!ascending);
      sortable(newArr);
    }
  };

  const headings = headers?.map((header, index) => (
    <div key={index} style={headerStyle} onClick={() => handleSort(header, index)}>
      {sortable && header === sortedColumn && (
        <i className={`fa-solid fa-arrow-${ascending ? "up" : "down"}`} />
      )} {header}
    </div>
  ));

  return (
    <li className="header" style={mainStyle}>
      {headings}
    </li>
  );
};

export const buildRows = args => {
  const {
    rows,
    headers,
    columnStyle,
    ascending,
    sortedColumn,
    sortable,
    draggable,
    labelStyle,
  } = args;

  const index = headers?.indexOf(sortedColumn);
  if (sortable && index !== -1) sort(rows, index, !ascending);

  return rows?.map((obj, index) => (
    <TRow
      key={index}
      style={{
        ...columnStyle,
        ...labelStyle,
        cursor: `${obj.onClick || draggable ? "pointer" : "default"}`,
      }}
      onClick={e => obj.onClick && obj.onClick(e)}
    >
      {obj.label && <div className="label">{obj.label}</div>}
      {buildData(obj, headers, draggable)}
    </TRow>
  ));
};