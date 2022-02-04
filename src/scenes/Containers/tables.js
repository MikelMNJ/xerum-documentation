import React, { Fragment } from 'react';
import { headers } from 'helpers/tableHelpers';

export const cardTable = {
  headers,
  rows: [
    {
      tData1: "",
      tData2: "",
      tData3: ""
    },
  ],
};

export const modalTable = {
  headers,
  rows: [
    {
      tData1: "",
      tData2: "",
      tData3: ""
    },
  ],
};

export const popOverTable = {
  headers,
  rows: [
    {
      tData1: "",
      tData2: "",
      tData3: ""
    },
  ],
};

export const slideOverTable = {
  headers,
  rows: [
    {
      tData1: "",
      tData2: "",
      tData3: ""
    },
  ],
};

export const tableTable = {
  headers,
  rows: [
    {
      tData1: "content*",
      tData2: "Object description of headers, rows etc.",
      tData3: "-"
    },
    {
      tData1: "sortable",
      tData2:
        <Fragment>
          Enables headers to sort table by ascending/descending column results when clicked.
          Handler receives newly sorted array.
        </Fragment>,
      tData3: "-"
    },
    {
      tData1: "draggable",
      tData2:
        <Fragment>
          Enables manual sort order manipulation of table rows via drag and drop.
          Handler receives newly sorted array.
        </Fragment>,
      tData3: "-"
    },
  ],
};