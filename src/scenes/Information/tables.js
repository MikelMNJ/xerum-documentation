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
    tData1: "icon",
    tData2:
      <Fragment>
        Fontawesome i.e. "<strong>fa-solid fa-info-circle</strong>"
        ("<strong>fas fa-info-circle</strong>" v5 and under).
      </Fragment>,
    tData3: <i className="fas fa-info-circle" />
  },
  {
    tData1: "text",
    tData2:
      <Fragment>
        Text to show on hover &mdash; overrides children.
      </Fragment>,
    tData3: "-"
  },
  {
    tData1: "position",
    tData2:
      <Fragment>
        <strong>top</strong>, <strong>right</strong>,&nbsp;
        <strong>bottom</strong> or <strong>left</strong>.
      </Fragment>,
    tData3: "Lower-right of cursor."
  },
];