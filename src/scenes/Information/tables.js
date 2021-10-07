import React, { Fragment } from 'react';

export const copyrightTable = [
  {
    tData1: "name*",
    tData2: "Your name, company/organization etc. the copyright belongs to.",
    tData3: "-"
  },
  {
    tData1: "trade",
    tData2: "Displays a registered trademark symbol in addition to the copyright.",
    tData3: "-"
  },
  {
    tData1: "rights",
    tData2: "Displays an additional message with your copyright.",
    tData3: "All rights reserved."
  },
];

export const socialTable = [
  {
    tData1: "networks*",
    tData2:
      <Fragment>
        Array of objects with <strong>name</strong>,&nbsp;
        <strong>path</strong> and <strong>icon</strong> keys.
      </Fragment>,
    tData3:
      <Fragment>
        icon: <i className="fas fa-question-circle" />
      </Fragment>
  },
  {
    tData1: "noText",
    tData2: "Disables network name text, if it exists.",
    tData3: "-"
  },
  {
    tData1: "column",
    tData2: "Stacks network icon and name.",
    tData3: "-"
  },
];

export const tooltipTable = [
  {
    tData1: "",
    tData2: "",
    tData3: "-"
  },
];