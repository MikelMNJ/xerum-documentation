export const cardCode = `<Card />`;

export const modalCode = `<Modal />`;

export const popOverCode = `<PopOver />`;

export const slideOverCode = `<SlideOver />`;

export const tableCode = `const receivedArr = sortedArr => {
  // Normalize or send to state directly.
};

const content = {
  headers: [ "Bird Name", "Flight Speed (MPH)" ],
  rows: [
    {
      td1: "Raven",
      td2: "50",
      onClick: () => rowHandler("1"),
    },
    {
      td1: "Sparrow",
      td2: "28",
      onClick: () => rowHandler("2"),
    },
    {
      td1: "Quail",
      td2: null,
      onClick: () => rowHandler("3"),
    },
  ],
};


<Table
  content={content}
  sortable={receivedArr}
  draggable={receivedArr}
/>`;