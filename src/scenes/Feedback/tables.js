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
    tData3:
      <Fragment>
        fa-solid/fas <br />
        fa-info-circle
      </Fragment>
  },
  {
    tData1: "noIcon",
    tData2: "Disables notification icon.",
    tData3: "-"
  },
];

export const notFoundTable = [
  {
    tData1: "",
    tData2: "",
    tData3: ""
  },
];

export const loadingTable = [
  {
    tData1: "",
    tData2: "",
    tData3: ""
  },
];

export const loadFailTable = [
  {
    tData1: "",
    tData2: "",
    tData3: ""
  },
];

export const badgeTable = [
  {
    tData1: "",
    tData2: "",
    tData3: ""
  },
];

export const bannerTable = [
  {
    tData1: "",
    tData2: "",
    tData3: ""
  },
];