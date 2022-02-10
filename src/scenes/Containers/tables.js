import React, { Fragment } from 'react';
import { headers } from 'helpers/tableHelpers';
import Status from 'components/Status/Status';

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
      tData2: "Object description of headers and rows.",
      tData3: "-"
    },
    {
      tData1: "sortable",
      tData2:
        <Fragment>
          Enables headers to sort table by ascending/descending column results when clicked&nbsp;
          &mdash; receives newly sorted array.
        </Fragment>,
      tData3: "-"
    },
    {
      tData1: "defaultSort",
      tData2:
      <Fragment>
          Default column to sort &mdash; must be an
          existing header string from your headers array.
        </Fragment>,
      tData3: "headers[0]"
    },
    {
      tData1: "draggable",
      tData2:
      <Fragment>
          Enables manual sort order manipulation of table rows via drag and drop&nbsp;
          &mdash; receives newly sorted array.
        </Fragment>,
      tData3: "-"
    },
    {
      tData1: "dragIcon",
      tData2:
        <Fragment>
          Fontawesome i.e. "<strong>fa-solid fa-grip-vertical</strong>".
        </Fragment>,
      tDAta3: <i className="fa-solid fa-grip-vertical" />
    },
    {
      tData1: "labelColor",
      tData2: "Sets the color of the label text using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#f5f5f5" text="#f5f5f5" />
    },
    {
      tData1: "labelBG",
      tData2: "Sets the color of the label background using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#20232a" text="#20232a" />
    },
  ],
};