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

      {val}
    </TData>
  ));
};

export const buildHeaders = headers => {
  return headers?.map((header, index) => (
    <div key={index}>
      {header}
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