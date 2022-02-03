import React from 'react';
import { startCase } from 'lodash';
import TRow from 'components/Table/TRow';
import TData from 'components/Table/TData';
import colors from 'theme/colors.scss';

export const headers = [ "NAME", "DESCRIPTION", "DEFAULT" ];

const buildCells = (obj, headers) => {
  return Object.values(obj).map((val, index) => (
    <TData key={index}>
      <strong>
        {startCase(headers[index].toLowerCase())}
      </strong>: &nbsp;
      {val}
    </TData>
  ));
};

export const buildRows = (rows, headers, columnStyle) => {
  return rows?.map((row, index) => (
    <TRow key={index} style={columnStyle}>
      {buildCells(row, headers)}
    </TRow>
  ));
};