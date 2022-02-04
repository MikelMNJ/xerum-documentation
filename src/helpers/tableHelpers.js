import React from 'react';
import { startCase } from 'lodash';
import TRow from 'components/Table/TRow';
import TData from 'components/Table/TData';
import colors from 'theme/colors.scss';

export const headers = [ "PROP NAME", "DESCRIPTION", "DEFAULT" ];

const buildCells = (obj, headers) => {
  const { onClick, ...rest } = obj;

  return Object.values(rest).map((val, index) => (
    <TData key={index}>
      <p className="respHeader">
        <strong>
          {startCase(headers[index]?.toLowerCase())}
        </strong>: &nbsp;
      </p>

      {val || "—"}
    </TData>
  ));
};

const sort = (rows, headerIndex, ascending) => {
  const sorted = rows.sort((a, b) => {
    const key = Object.keys(a)[headerIndex];
    const val1 = a[key];
    const val2 = b[key];

    if (val1 === null) return 0;
    if (val1 < val2 || val2 === null) return ascending ? -1 : 1;
    if (val1 > val2) return ascending ? 1 : -1;

    return 0;
  });

  return sorted;
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
  } = args;
  const cursorStyle = { cursor: `${sortable ? "pointer" : "default"}` };

  const handleSort = (header, index) => {
    // TODO: on dragEnd setSortedColumn(null);
    if (sortedColumn !== header) setSortedColumn(header);

    if (sortable) {
      const newArr = sort(rows, index, ascending);
      setAscending(!ascending);
      sortable(newArr);
    }
  };

  return headers?.map((header, index) => (
    <div key={index} style={cursorStyle} onClick={() => handleSort(header, index)}>
      {sortable && header === sortedColumn && (
        <i className={`fa-solid fa-arrow-${ascending ? "up" : "down"}`} />
      )} {header}
    </div>
  ));
};

export const buildRows = (rows, headers, columnStyle) => {
  return rows?.map((row, index) => (
    <TRow
      key={index}
      style={{ ...columnStyle, cursor: `${row.onClick ? "pointer" : ""}` }}
      onClick={e => row.onClick && row.onClick(e)}
    >
      {buildCells(row, headers)}
    </TRow>
  ));
};