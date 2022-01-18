import React, { Fragment } from 'react';

export const fieldReqsTable = [
  {
    tData1: "value*",
    tData2: "Current value of the associated field to check against.",
    tData3: "-"
  },
  {
    tData1: "upper",
    tData2: "Adds an uppercase requirement.",
    tData3: "-"
  },
  {
    tData1: "lower",
    tData2: "Adds a lowercase requirement.",
    tData3: "-"
  },
  {
    tData1: "number",
    tData2: "Adds a number requirement.",
    tData3: "-"
  },
  {
    tData1: "min",
    tData2: "Adds a minimum length requirement.",
    tData3: "8"
  },
  {
    tData1: "special",
    tData2: "Adds a special character requirement — pass a custom string to override default.",
    tData3: "@#$%^&+=!"
  },
  {
    tData1: "exclude",
    tData2:
      <Fragment>
        Array of objects for custom exclusion.  Objects must be
        &#123; <strong>display</strong>, <strong>value</strong> &#125;.
        Where <strong>display</strong> is the friendly name shown and&nbsp;
        <strong>value</strong> is the exclusion.
      </Fragment>,
    tData3: "-"
  },
];

export const fieldErrorTable = [
  {
    tData1: "",
    tData2: "",
    tData3: ""
  },
];

export const toggleTable = [
  {
    tData1: "",
    tData2: "",
    tData3: ""
  },
];