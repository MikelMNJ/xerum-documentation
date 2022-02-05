export const cardCode = `<Card />`;

export const modalCode = `<Modal />`;

export const popOverCode = `<PopOver />`;

export const slideOverCode = `<SlideOver />`;

export const tableCode = `const [ content, setContent ] = useState({
  headers: [ "Bird Name", "Flight Speed (MPH)" ],
  rows: [
    {
      td1: "Sparrow",
      td2: null,
      onClick: () => rowHandler("Sparrow"),
    },
    {
      td1: "Golden Eagle",
      td2: 200,
      onClick: () => rowHandler("Raven"),
    },
    {
      td1: "Quail",
      td2: 30,
      onClick: () => rowHandler("Quail"),
    },
  ],
});

const receivedArr = sortedArr => {
  // Normalize or send to state directly.
  setContent({ ...content, rows: sortedArr })
};

<Table
  content={content}
  defaultSort={headers[1]}
  sortable={receivedArr}
  draggable={receivedArr}
/>`;