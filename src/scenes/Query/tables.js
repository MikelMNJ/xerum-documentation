import React, { Fragment } from 'react';
import { headers } from 'helpers/tableHelpers';

export const searchTable = {
  headers,
  rows: [
    {
      tData1: "icon",
      tData2:
        <Fragment>
          Fontawesome i.e. "<strong>fa-solid fa-magnifying-glass</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-magnifying-glass" />
    },
    {
      tData1: "noIcon",
      tData2: "Disables the search field icon.",
      tData3: null
    },
    {
      tData1: "btnText",
      tData2: "Text to display on search button.",
      tData3: "Search",
    },
    {
      tData1: "btnClassName",
      tData2: "Your className string to forward to the button element.",
      tData3: null
    },
    {
      tData1: "callback",
      tData2: "Generic event handler when search button is clicked.",
      tData3: null
    },
  ],
};

export const filterTable = {
  headers,
  rows: [
    {
      tData1: "icon",
      tData2:
        <Fragment>
          Fontawesome i.e. "<strong>fa-solid fa-filter</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-filter" />
    },
    {
      tData1: "noIcon",
      tData2: "Disables the filter field icon.",
      tData3: null
    },
    {
      tData1: "data",
      tData2: "Main data object with at least one { key: value } pair.",
      tData3: null
    },
    {
      tData1: "include",
      tData2:
        <Fragment>
          Array of key names from your <strong>data</strong> object to
          include in filter results — use dot notation to access nested
          keys, i.e. "key.subKey.anotherKey"
        </Fragment>,
      tData3: null
    },
    {
      tData1: "callback",
      tData2: "Generic handler that receives filtered array results.",
      tData3: null
    },
  ],
};
