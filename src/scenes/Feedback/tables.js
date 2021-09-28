import React, { Fragment } from 'react';

export const messagesTable = [
  {
    tData1: "messages*",
    tData2: "Array of messages from app state.",
    tData3: "-"
  },
  {
    tData1: "setMessages*",
    tData2:
      <Fragment>
        Action from app state responsible for altering your <strong>messages</strong> selector.
      </Fragment>,
    tData3: "-"
  },
  {
    tData1: "time",
    tData2: "Time before notification self-closes.",
    tData3: "4 seconds"
  },
  {
    tData1: "noTime",
    tData2: "Disables self-closing timer, user must manually close notification.",
    tData3: "-"
  },
  {
    tData1: "icon",
    tData2:
      <Fragment>
        Fontawesome i.e. "<strong>fa-solid fa-check</strong>"&nbsp;
        ("<strong>fas fa-check</strong>" v5 and under).
      </Fragment>,
    tData3: <i className="fas fa-info-circle" />
  },
  {
    tData1: "noIcon",
    tData2: "Disables notification icon.",
    tData3: "-"
  },
];

export const notFoundTable = [
  {
    tData1: "icon",
    tData2:
      <Fragment>
        Fontawesome i.e. "<strong>fa-solid fa-bug</strong>"&nbsp;
        ("<strong>fas fa-bug</strong>" v5 and under).
      </Fragment>,
    tData3: <i className="fas fa-bug" />
  },
  {
    tData1: "noIcon",
    tData2: "Disabled not found icon.",
    tData3: "-"
  },
  {
    tData1: "title",
    tData2: "Sets a custom, heavily-weighted title.",
    tData3: "404: Hrmm..."
  },
  {
    tData1: "noTitle",
    tData2: "Disables not found title.",
    tData3: "-"
  },
  {
    tData1: "message",
    tData2: "Sets a custom message.",
    tData3: "Can't find that page."
  },
  {
    tData1: "noMessage",
    tData2: "Disables not found message.",
    tData3: "-"
  },
];

export const loadingTable = [
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
        Fontawesome i.e. "<strong>fa-solid fa-spinner</strong>"&nbsp;
        ("<strong>fas fa-spinner</strong>" v5 and under).
      </Fragment>,
    tData3: <i className="fas fa-spinner fa-spin" />
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
        Fontawesome i.e. "<strong>fa-solid fa-exclamation</strong>"&nbsp;
        ("<strong>fas fa-exclamation</strong>" v5 and under).
      </Fragment>,
    tData3: <i className="fas fa-exclamation" />
  },
  {
    tData1: "failText",
    tData2: "Your text or component to display if loading/API call is complete and no data was returned or set in app state.",
    tData3: "Load failed."
  },
  {
    tData1: "noIcon",
    tData2: "Disables load/fail icons.",
    tData3: "-"
  },
  {
    tData1: "noText",
    tData2: "Disables load/fail text.",
    tData3: "-"
  },
];

export const badgeTable = [
  {
    tData1: "count",
    tData2: "Integer count to be displayed — will not display if falsey.",
    tData3: "-"
  },
  {
    tData1: "square",
    tData2: "Overrides default circle styling with rounded square corners.",
    tData3: "-"
  },
];

export const bannerTable = [
  {
    tData1: "text",
    tData2: "Text to show on banner — overrides children.",
    tData3: "-"
  },
  {
    tData1: "icon",
    tData2:
      <Fragment>
        Fontawesome i.e. "<strong>fa-solid fa-times</strong>"&nbsp;
        ("<strong>fas fa-times</strong>" v5 and under).
      </Fragment>,
    tData3:
      <Fragment>
        <i className="fas fa-times" />
      </Fragment>
  },
  {
    tData1: "noIcon",
    tData2: "Disables banner callback icon.",
    tData3: "-"
  },
  {
    tData1: "callback",
    tData2: "Generic click handler, typically for controlling banner state.",
    tData3: "-"
  },
  {
    tData1: "center",
    tData2: "Center justifies banner text or children.",
    tData3: "-"
  },
  {
    tData1: "sharp",
    tData2: "Overrides default rounded corner styling with sharp corners.",
    tData3: "-"
  },
];