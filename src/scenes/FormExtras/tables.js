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
      tData1: "",
      tData2: "",
      tData3: null
    },
  ]
};