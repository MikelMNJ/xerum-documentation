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
    tData1: "",
    tData2: "",
    tData3: ""
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