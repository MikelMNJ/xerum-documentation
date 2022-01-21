import React, { Fragment } from 'react';

export const searchTable = [
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
    tData3: "-"
  },
  {
    tData1: "btnText",
    tData2: "Text to display on search button.",
    tData3: "Search",
  },
  {
    tData1: "btnClassName",
    tData2: "Your className string to forward to the button element.",
    tData3: "-"
  },
  {
    tData1: "callback",
    tData2: "Generic event handler when search button is clicked.",
    tData3: "-"
  },
];

export const filterTable = [
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
    tData3: "-"
  },
  {
    tData1: "data",
    tData2: "",
    tData3: "-"
  },
  {
    tData1: "match",
    tData2: "",
    tData3: "-"
  },
  {
    tData1: "reset",
    tData2: "",
    tData3: "-"
  },
  {
    tData1: "callback",
    tData2: "",
    tData3: "-"
  },
];
