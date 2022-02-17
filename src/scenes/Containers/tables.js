import React, { Fragment } from 'react';
import { headers } from 'helpers/tableHelpers';
import Status from 'components/Status/Status';

export const cardTable = {
  headers,
  rows: [
    {
      tData1: "image",
      tData2: "Thumbnail image to render on card.",
      tData3: "-"
    },
    {
      tData1: "title",
      tData2: "Title text to display on card.",
      tData3: "-"
    },
    {
      tData1: "titleColor",
      tData2: "Sets the color of the title text using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#0d97ff" text="#0d97ff" />
    },
    {
      tData1: "text",
      tData2: "Preview text to display on card.",
      tData3: "-"
    },
    {
      tData1: "limit",
      tData2: "Limits the length of the preview text by character -- will stop at the nearest whole word closest to given character limit.",
      tData3: "96"
    },
    {
      tData1: "footer",
      tData2: "Enables the card footer for additional information. Takes a string or element.",
      tData3: "true"
    },
    {
      tData1: "url",
      tData2: "External url to open if image or title is clicked.",
      tData3: "-"
    },
    {
      tData1: "vertical",
      tData2: "Changes the default horizontal layout of the Card to vertical.",
      tData3: "-"
    },
  ],
};

export const confirmTable = {
  headers,
  rows: [
    {
      tData1: "title",
      tData2: "Title to display in confirm dialogue.",
      tData3: "-"
    },
    {
      tData1: "titleColor",
      tData2: "Sets the color of the title text using hex format, i.e. #000 or #000000.",
      tData3: "-"
    },
    {
      tData1: "message",
      tData2: "Primary message to display in confirm dialogue.",
      tData3: "-"
    },
    {
      tData1: "confirmText",
      tData2: "Text to display on the confirm button.",
      tData3: "Okay"
    },
    {
      tData1: "cancelText",
      tData2: "Text to display on the cancel button.",
      tData3: "Cancel"
    },
    {
      tData1: "onConfirm",
      tData2:
        <Fragment>
          Generic event handler when confirm button is clicked. This should&nbsp;
          <strong>not</strong> toggle state visibility and is reserved only for
          your API call or other action.
        </Fragment>,
      tData3: "-"
    },
    {
      tData1: "onCancel",
      tData2:
        <Fragment>
          Generic event handler when cancel button is clicked. This&nbsp;
          <strong>should</strong> toggle state visibility.
        </Fragment>,
      tData3: "-"
    },
    {
      tData1: "bgClose",
      tData2:
        <Fragment>
          Allows click event on the confirm background to trigger the&nbsp;
          <strong>onCancel</strong> handler.
        </Fragment>,
      tData3: "false"
    },
  ],
};

export const modalTable = {
  headers,
  rows: [
    {
      tData1: "title",
      tData2: "Title to display in the Modal window.",
      tData3: "-"
    },
    {
      tData1: "titleColor",
      tData2: "Sets the color of the title text and close icon hover state using hex format, i.e. #000 or #000000.",
      tData3: "-"
    },
    {
      tData1: "closeIcon",
      tData2:
        <Fragment>
          Fontawesome i.e. "<strong>fa-solid fa-xmark</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-xmark" />
    },
    {
      tData1: "onClose",
      tData2:
        <Fragment>
          Generic event handler when close button is clicked &mdash; your
          state action for controlling visibility should be passed here.
        </Fragment>,
      tData3: "-"
    },
    {
      tData1: "bgClose",
      tData2:
        <Fragment>
          Allows click event on the modal background to trigger the&nbsp;
          <strong>onClose</strong> handler.
        </Fragment>,
      tData3: "false"
    },
  ],
};

export const slideOverTable = {
  headers,
  rows: [
    {
      tData1: "title",
      tData2: "Title to display in the Slide-Over panel.",
      tData3: "-"
    },
    {
      tData1: "titleColor",
      tData2: "Sets the color of the title text and close icon hover state using hex format, i.e. #000 or #000000.",
      tData3: "-"
    },
    {
      tData1: "closeIcon",
      tData2:
        <Fragment>
          Fontawesome i.e. "<strong>fa-solid fa-arrow-right-long</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-arrow-right-long" />
    },
    {
      tData1: "onClose",
      tData2:
        <Fragment>
          Generic event handler when close button is clicked &mdash; your
          state action for controlling visibility should be passed here.
        </Fragment>,
      tData3: "-"
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

export const tabsTable = {
  headers,
  rows: [
    {
      tData1: "content*",
      tData2:
        <Fragment>
          Array of objects containing &#123; <strong>name</strong>,&nbsp;
          <strong>content</strong> &#125; keys, where&nbsp;
          <strong>name</strong> is the friendly name shown on the tab and&nbsp;
          <strong>content</strong> is the content to be rendered.
        </Fragment>,
      tData3: "-"
    },
    {
      tData1: "activeColor",
      tData2: "Sets the color of the active tab background using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#0d97ff" text="#0d97ff" />
    },
    {
      tData1: "inactiveColor",
      tData2: "Sets the color of the inactive tab background using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#4d5153" text="#4d5153" />
    },
    {
      tData1: "separatorColor",
      tData2: "Sets the color of the spacing between tabs using hex format, i.e. #000 or #000000.",
      tData3: <Status color="#20232a" text="#20232a" />
    },
  ],
};