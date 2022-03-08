import React, { Fragment } from 'react';
import { headers } from 'helpers/tableHelpers';
import Status from 'components/Status/Status';

export const checkboxTable = {
  headers,
  rows: [
    {
      tData1: "name*",
      tData2: "Name of field, for validation.",
      tData3: null
    },
    {
      tData1: "label",
      tData2: "String to display to the right of the checkbox.",
      tData3: null
    },
    {
      tData1: "icon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-check</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-check" />
    },
    {
      tData1: "boxColor",
      tData2: "Sets the color of the check box using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#7e8489" text="#7e8489" />
    },
    {
      tData1: "checkColor",
      tData2: "Sets the color of the check mark using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#0d97ff" text="#0d97ff" />
    },
  ]
};

export const fieldSliderTable = {
  headers,
  rows: [
    {
      tData1: "",
      tData2: "",
      tData3: null
    },
  ]
};

export const toggleTable = {
  headers,
  rows: [
    {
      tData1: "icon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-circle</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-circle" />
    },
    {
      tData1: "iconColor",
      tData2: "Sets the color of the toggle icon using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#f5f5f5" text="#f5f5f5" />
    },
    {
      tData1: "inactiveColor",
      tData2: "Sets the inactive color of the toggle track using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#5d6166" text="#5d6166" />
    },
    {
      tData1: "activeColor",
      tData2: "Sets the active color of the toggle track using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#0d97ff" text="#0d97ff" />
    },
    {
      tData1: "callback",
      tData2:
      <Fragment>
          Generic handler that receives new toggle value of &nbsp;
          <strong>true</strong> or <strong>false</strong>.
        </Fragment>,
      tData3: null
    },
  ]
};