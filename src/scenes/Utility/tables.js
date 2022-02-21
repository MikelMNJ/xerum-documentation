import React, { Fragment } from 'react';
import { headers } from 'helpers/tableHelpers';
import Status from 'components/Status/Status';

export const heartbeatTable = {
  headers,
  rows: [
    {
      tData1: "time",
      tData2: "Time (milleseconds) between connection tests.",
      tData3: "10 seconds"
    },
    {
      tData1: "icon",
      tData2:
      <Fragment>
        Fontawesome i.e. "<strong>fa-solid fa-ethernet</strong>".
      </Fragment>,
      tData3: <i className="fa-solid fa-ethernet" />
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
      tData3: null
    },
  ],
};

export const authRouteTable = {
  headers,
  rows: [
    {
      tData1: "auth",
      tData2:
        <Fragment>
          <strong>true</strong> or <strong>false</strong>.
        </Fragment>,
      tData3: null
    },
    {
      tData1: "redirect",
      tData2: "Path of authentication page to redirect to if token is invalid.",
      tData3: "/login"
    },
  ],
};

export const toTopTable = {
  headers,
  rows: [
    {
      tData1: "sharp",
      tData2: "Overrides default rounded corner styling with sharp corners.",
      tData3: null
    },
    {
      tData1: "circle",
      tData2: "Changes default rounded square styling with circle styling.",
      tData3: null
    },
  ],
};

export const aggTimerTable = {
  headers,
  rows: [
    {
      tData1: "timeframe",
      tData2:
        <Fragment>
          <strong>seconds</strong>,&nbsp;
          <strong>minutes</strong>,&nbsp;
          <strong>hours</strong>,&nbsp;
          <strong>days</strong>,&nbsp;
          <strong>weeks</strong> or&nbsp;
          <strong>months</strong>.
        </Fragment>,
      tData3: "hours"
    },
    {
      tData1: "aggregate",
      tData2:
        <Fragment>
          Aggregation for <strong>timeframe</strong>, i.e. new time range interval every
          3rd day in the week or 15m in the hour etc.
        </Fragment>,
      tData3: "1"
    },
    {
      tData1: "local",
      tData2: "Overrides UTC and uses local time.",
      tData3: "UTC"
    },
    {
      tData1: "limit",
      tData2:
        <Fragment>
          Limits display length. i.e. limit of 3 for <strong>months</strong> as
          MM:WW:DD vs MM:WW:DD:hh:mm:ss
        </Fragment>,
      tData3: null
    },
    {
      tData1: "compact",
      tData2: "Removes friendly units and compresses space between time spots, i.e. 00:00:00",
      tData3: null
    },
    {
      tData1: "callback",
      tData2: "Function to execute when timer reaches the end of it's range.",
      tData3: null
    },
  ],
};

export const statusTable = {
  headers,
  rows: [
    {
      tData1: "color",
      tData2: "Sets the color of the indicator using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#7e8489" text="#7e8489" />
    },
    {
      tData1: "text",
      tData2: "Text to display next to service indicator.",
      tData3: null
    },
  ],
};