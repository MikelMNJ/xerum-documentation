import React from 'react';
import TRow from 'components/Table/TRow';
import TData from 'components/Table/TData';

export const buildRows = rows => {
  return rows.map((row, index) => (
    <TRow key={index}>
      <TData className="attrName">
        {row.tData1}
      </TData>

      <TData className="description">
        {row.tData2}
      </TData>

      <TData className="default">
        {row.tData3}
      </TData>
    </TRow>
  ));
};