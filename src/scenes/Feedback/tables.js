import React, { Fragment } from 'react';
import { headers } from 'helpers/tableHelpers';

export const notificationsTable = {
  headers,
  rows: [
    {
      tData1: "notifications*",
      tData2: "Array of notifications from app state.",
      tData3: null
    },
    {
      tData1: "setNotifications*",
      tData2:
        <Fragment>
          Action from app state responsible for altering your <strong>notifications</strong> selector.
        </Fragment>,
      tData3: null
    },
    {
      tData1: "time",
      tData2: "Time (milleseconds) before notification self-closes.",
      tData3: "4 seconds"
    },
    {
      tData1: "noTime",
      tData2: "Disables self-closing timer, user must manually close notification.",
      tData3: null
    },
    {
      tData1: "icon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-check</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-info-circle" />
    },
    {
      tData1: "noIcon",
      tData2: "Disables notification icon.",
      tData3: null
    },
  ],
};

export const notFoundTable = {
  headers,
  rows: [
    {
      tData1: "icon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-bug</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-bug" />
    },
    {
      tData1: "noIcon",
      tData2: "Disabled not found icon.",
      tData3: null
    },
    {
      tData1: "title",
      tData2: "Sets a custom, heavily-weighted title.",
      tData3: "404: Hrmm..."
    },
    {
      tData1: "noTitle",
      tData2: "Disables not found title.",
      tData3: null
    },
    {
      tData1: "message",
      tData2: "Sets a custom message.",
      tData3: "Can't find that page."
    },
    {
      tData1: "noMessage",
      tData2: "Disables not found message.",
      tData3: null
    },
  ],
};

export const loadingTable = {
  headers,
  rows: [
    {
      tData1: "isLoading*",
      tData2:
        <Fragment>
          <strong>true</strong> or <strong>false</strong> &mdash;
          derived from loading selector managed in app state
          on specific resource API call start/end.
        </Fragment>,
      tData3: "true"
    },
    {
      tData1: "hasData*",
      tData2:
        <Fragment>
          <strong>true</strong> or <strong>false</strong> &mdash;
          derived from data returned (or not) after server response.
        </Fragment>,
      tData3: "false"
    },
    {
      tData1: "icon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-spinner</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-spinner fa-spin" />
    },
    {
      tData1: "text",
      tData2: "Your text or component to display while API call is being made.",
      tData3: "Loading..."
    },
    {
      tData1: "failIcon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-exclamation-circle</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-exclamation-circle" />
    },
    {
      tData1: "failText",
      tData2: "Your text or component to display if loading/API call is complete and no data was returned or set in app state.",
      tData3: "Load failed."
    },
    {
      tData1: "noIcon",
      tData2: "Disables load/fail icons.",
      tData3: null
    },
    {
      tData1: "noText",
      tData2: "Disables load/fail text.",
      tData3: null
    },
  ],
};

export const badgeTable = {
  headers,
  rows: [
    {
      tData1: "count",
      tData2: "Integer count to be displayed — will not display if falsey.",
      tData3: null
    },
    {
      tData1: "square",
      tData2: "Overrides default circle styling with rounded square corners.",
      tData3: null
    },
  ],
};

export const bannerTable = {
  headers,
  rows: [
    {
      tData1: "text",
      tData2: "Text to show on banner — overrides children.",
      tData3: null
    },
    {
      tData1: "closeIcon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-times</strong>".
        </Fragment>,
      tData3:
        <Fragment>
          <i className="fa-solid fa-times" />
        </Fragment>
    },
    {
      tData1: "noClose",
      tData2: "Disables banner close icon.",
      tData3: null
    },
    {
      tData1: "callback",
      tData2: "Generic click handler, typically for controlling banner state.",
      tData3: null
    },
    {
      tData1: "center",
      tData2: "Center justifies banner text or children.",
      tData3: null
    },
    {
      tData1: "sharp",
      tData2: "Overrides default rounded corner styling with sharp corners.",
      tData3: null
    },
  ],
};

export const fieldReqsTable = {
  headers,
  rows: [
    {
      tData1: "value*",
      tData2: "Current value of the associated field to check against.",
      tData3: null
    },
    {
      tData1: "upper",
      tData2: "Adds an uppercase requirement.",
      tData3: null
    },
    {
      tData1: "lower",
      tData2: "Adds a lowercase requirement.",
      tData3: null
    },
    {
      tData1: "number",
      tData2: "Adds a number requirement.",
      tData3: null
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
      tData3: null
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
  ],
};

export const fieldErrorTable = {
  headers,
  rows: [
    {
      tData1: "name*",
      tData2: "Name of field to validate — must match reference field name, exactly.",
      tData3: null
    },
  ],
};