import React, { Fragment } from 'react';
import { headers } from 'helpers/tableHelpers';
import Status from 'components/Status/Status';

export const progressTable = {
  headers,
  rows: [
    {
      tData1: "current",
      tData2: "Current value to divide with.",
      tData3: null
    },
    {
      tData1: "total",
      tData2: "Total value to divide by.",
      tData3: null
    },
    {
      tData1: "fixedPct",
      tData2: "Keeps percent value fixed instead of following the progress bar.",
      tData3: "false"
    },
    {
      tData1: "noPct",
      tData2: "Disables percent value.",
      tData3: "false"
    },
    {
      tData1: "color",
      tData2: "Sets the color of the progress bar using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#0d97ff" text="#0d97ff" />
    },
    {
      tData1: "bgColor",
      tData2: "Sets the color of the indicator using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#4d5153" text="#4d5153" />
    },
    {
      tData1: "pctColor",
      tData2: "Sets the color of the percent value using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#00000080" text="#00000080" />
    },
  ],
};

export const priceTable = {
  headers,
  rows: [
    {
      tData1: "value",
      tData2: "Amount to be rendered.",
      tData3: "0"
    },
    {
      tData1: "limit",
      tData2: "Limits the decimal placement count.",
      tData3: "2",
    },
    {
      tData1: "symbol",
      tData2:
      <Fragment>
        Symbol of currency that precedes <strong>value</strong>.
        Takes a string or more custom solution within React tags.
      </Fragment>,
      tData3: "$"
    },
    {
      tData1: "currency",
      tData2:
      <Fragment>
        Three to four letter abbreviated currency, i.e. <i>USD</i>, <i>GBP</i>, <i>YUAN</i> etc.
      </Fragment>,
      tData3: null
    },
    {
      tData1: "positiveColor",
      tData2:
        <Fragment>
          Sets the positive color of <strong>value</strong> using hex format, i.e. #000 or #000000.",
        </Fragment>,
      tData3: null
    },
     {
      tData1: "negativeColor",
      tData2:
        <Fragment>
          Sets the negative color of <strong>value</strong> using hex format, i.e. #000 or #000000.",
        </Fragment>,
      tData3: null
    },
  ],
};

export const percentTable = {
  headers,
  rows: [
    {
      tData1: "current",
      tData2: "Current value to divide with.",
      tData3: null
    },
    {
      tData1: "total",
      tData2: "Total value to divide by.",
      tData3: null
    },
    {
      tData1: "limit",
      tData2: "Limits the decimal placement count.",
      tData3: "2"
    },
    {
      tData1: "usePlus",
      tData2:
        <Fragment>
          <strong>true</strong> or <strong>false</strong>.
          Enables the "+" symbol preceding positive percent values.
        </Fragment>,
      tData3: "false"
    },
    {
      tData1: "positiveColor",
      tData2: "Sets the color of a positive result using hex format, i.e. #000 or #000000.",
      tData3: null
    },
     {
      tData1: "negativeColor",
      tData2: "Sets the color of a negative result using hex format, i.e. #000 or #000000.",
      tData3: null
    },
  ],
};