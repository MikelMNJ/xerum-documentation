import React, { Fragment } from 'react';
import Status from 'components/Status/Status';

export const heartbeatTable = [
  {
    tData1: "time",
    tData2: "Time (milleseconds) between connection tests.",
    tData3: "10 seconds"
  },
  {
    tData1: "icon",
    tData2:
    <Fragment>
      Fontawesome i.e. "<strong>fa-solid fa-ethernet</strong>"&nbsp;
      ("<strong>fas fa-ethernet</strong>" v5 and under).
    </Fragment>,
    tData3: <i className="fas fa-ethernet" />
  },
  {
    tData1: "text",
    tData2: "Text to display on connection fail.",
    tData3: "No connection detected."
  },
  {
    tData1: "disabled",
    tData2:
      <Fragment>
        <strong>true</strong> or <strong>false</strong>.
      </Fragment>,
    tData3: "-"
  },
];

export const authRouteTable = [
  {
    tData1: "",
    tData2: "",
    tData3: ""
  },
];

export const toTopTable = [
  {
    tData1: "",
    tData2: "",
    tData3: ""
  },
];

export const countdownTable = [
  {
    tData1: "",
    tData2: "",
    tData3: ""
  },
];

export const statusTable = [
  {
    tData1: "color",
    tData2: "Sets the color of the indicator using hex format, i.e. #000 or #000000",
    tData3: <Status color="#7e8489" text="#7e8489" />
  },
  {
    tData1: "text",
    tData2: "Text to display next to service indicator.",
    tData3: "-"
  },
];