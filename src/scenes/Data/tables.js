import React, { Fragment } from 'react';
import Status from 'components/Status/Status';

export const progressTable = [
  {
    tData1: "current",
    tData2: "Current value to divide with.",
    tData3: "-"
  },
  {
    tData1: "total",
    tData2: "Total value to divide by.",
    tData3: "-"
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
];

export const priceTable = [
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
    tData3: "-"
  },
];

export const percentTable = [
  {
    tData1: "current",
    tData2: "Current value to divide with.",
    tData3: "-"
  },
  {
    tData1: "total",
    tData2: "Total value to divide by.",
    tData3: "-"
  },
  {
    tData1: "limit",
    tData2: "Limits the decimal placement count.",
    tData3: "2"
  },
];