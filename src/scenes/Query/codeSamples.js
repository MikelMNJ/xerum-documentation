
export const searchCode = `<Search
  btnText="Find it"
  placeholder="Find something..."
  callback={val => {
    const payload = { yourQueryKey: val };

    // Your API action...
    sendToAPI(payload);
  }} />
`;

export const filterCode = `<Filter />`;
