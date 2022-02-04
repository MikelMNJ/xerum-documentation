export const cardCode = `<Card />`;

export const modalCode = `<Modal />`;

export const popOverCode = `<PopOver />`;

export const slideOverCode = `<SlideOver />`;

export const tableCode = `const content = {
  headers: [ "Header 1", "Header 2", "Header 3" ],
  rows: [
    {
      td1: "Row 1, Col 1",
      td2: "Row 1, Col 2",
      td3: "Row 1, Col 3",
      onClick: () => callback("1"),
    },
    {
      td1: "Row 2, Col 1",
      td2: "Row 2, Col 2",
      td3: "Row 2, Col 3",
      onClick: () => callback("2"),
    },
  ],
};

<Table content={content} />`;