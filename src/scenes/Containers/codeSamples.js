export const cardCode = `<Card />`;

export const modalCode = `const [ visible, setVisible ] = useState(false);

{visible && (
  <Modal
    title="Modal title..."
    onClose={() => setVisible(!visible)}
    bgClose
  >
    <p>Modal content...</p>
  </Modal>
)}`;

export const popOverCode = `<PopOver />`;

export const slideOverCode = `const [ visible, setVisible ] = useState(false);

{visible && (
  <SlideOver
    title="Slide-Over title..."
    onClose={() => setVisible(!visible)}
  >
    <p>Slide-Over content...</p>
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