import React, { Fragment } from 'react';
import Status from 'components/Status/Status';

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
  {
    tData1: "color",
    tData2: "Sets the active color of a valid icon using hex format, i.e. #000 or #000000.",
    tData3:
      <Fragment>
        <i className="fa-solid fa-check-circle" style={{ color: "#0d97ff" }} /> #0d97ff
      </Fragment>
  },
  {
    tData1: "exColor",
    tData2: "Sets the active color of an exclusion icon using hex format, i.e. #000 or #000000.",
    tData3:
      <Fragment>
        <i className="fa-solid fa-exclamation-circle" style={{ color: "#c93434" }} /> #c93434
      </Fragment>
  },
  {
    tData1: "bgColor",
    tData2: "Sets the inactive color of all icons using hex format, i.e. #000 or #000000.",
    tData3:
      <Fragment>
        <i className="fa-solid fa-check-circle" style={{ color: "#aab2b8" }} />&nbsp;
        <i className="fa-solid fa-exclamation-circle" style={{ color: "#aab2b8" }} /> #aab2b8
      </Fragment>
  }
];

export const fieldErrorTable = [
  {
    tData1: "name*",
    tData2: "Name of field to validate — must match reference field name, exactly.",
    tData3: "-"
  },
];