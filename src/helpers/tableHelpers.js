import React from 'react';
import TRow from 'components/Table/TRow';
import TData from 'components/Table/TData';
import colors from 'theme/colors.scss';

// TODO: Build TData dynamically and pass header name array.

export const buildRows = (rows, isMobile) => {
  return rows.map((row, index) => (
    <TRow key={index}>
      <TData>
        <strong style={{ color: colors.deepBlue }}>
          {row.tData1}
        </strong>
      </TData>

      <TData>
        <p>
          {row.tData2}
        </p>
      </TData>

      <TData>
        <span className="mobileDefault">
          <strong>Default</strong>: &nbsp;
        </span>

        <strong>
          {row.tData3}
        </strong>
      </TData>
    </TRow>
  ));
};