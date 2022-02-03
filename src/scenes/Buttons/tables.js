import React, { Fragment } from 'react';
import { headers } from 'helpers/tableHelpers';

export const buttonTable = {
  headers,
  rows: [
    {
      tData1: "btnType",
      tData2:
        <Fragment>
          <strong>solid</strong>, <strong>ghost</strong> or <strong>transparent</strong>.
        </Fragment>,
      tData3: "solid"
    },
    {
      tData1: "icon",
      tData2:
        <Fragment>
          Fontawesome i.e. "<strong>fa-solid fa-check</strong>".
        </Fragment>,
      tData3: "-"
    },
    {
      tData1: "text",
      tData2: "Primary text to display.",
      tData3: "-",
    },
    {
      tData1: "hoverStyle",
      tData2: "For hover styles that need to be handled dynamically.",
      tData3: "-",
    },
    {
      tData1: "callback",
      tData2: "Generic click handler for route changes or other functions.",
      tData3: "-",
    },
    {
      tData1: "passthrough",
      tData2: "Stops event propagation and allows callback if parent click event overrides callback.",
      tData3: "-",
    },
    {
      tData1: "url",
      tData2: "Used explicitly for making external site calls.",
      tData3: "-",
    },
  ],
};