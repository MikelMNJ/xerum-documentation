export const cardCode = `<Card />`;

export const modalCode = `<Modal />`;

export const popOverCode = `<PopOver />`;

export const slideOverCode = `// 1. Set hook to receive visible state.
const [ visible, setVisible ] = useState(false);

const title = (
  <Fragment>
    <i className="fa-solid fa-sliders" />&nbsp;
    Settings
  </Fragment>
);

// 2. Conditionally render based on hook.
{visible && (
  <SlideOver
    title={title}
    // 3. Pass state action to hide panel.
    onClose={() => setVisible(!visible)}
  >
    <p>Panel content...</p>
  </SlideOver>
)}`;

export const tableCode = `const [ content, setContent ] = useState({
  headers: [ "Bird Name", "Flight Speed (MPH)" ],
  rows: [
    {
      td1: "Sparrow",
      td2: null,
      onClick: () => rowHandler("Sparrow"),
      label: "Small",
    },
    {
      td1: "Golden Eagle",
      td2: 200,
      onClick: () => rowHandler("Eagle"),
      label: "Large",
    },
    {
      td1: "Raven",
      td2: 50,
      onClick: () => rowHandler("Raven"),
      label: "Medium",
    },
  ],
});

const flightSpeed = content.headers[1];
const receivedArr = sortedArr => {
  // Normalize or send to state directly.
  setContent({ ...content, rows: sortedArr })
};

<Table
  content={content}
  defaultSort={flightSpeed}
  sortable={receivedArr}
  draggable={receivedArr}
/>`;