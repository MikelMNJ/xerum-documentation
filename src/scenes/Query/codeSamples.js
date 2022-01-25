
export const searchCode = `<Search
  btnText="Find it"
  placeholder="Find something..."
  callback={val => {
    const payload = { yourQueryKey: val };

    // Your API action...
    sendToAPI(payload);
  }} />
`;

export const filterCode = `// 1. Set hook to receive filtered data.
const [ filtered, setFiltered ] = useState([]);

const data = {
  default: "BTC-USD",
  currencies: {
    pairs: [ "USD", "GBP", "EUR" ],
    crypto: [
      { rawData: { symbol: "BTC" } },
      { rawData: { symbol: "ETH" } },
      { rawData: { symbol: "XRP" } },
      { rawData: { symbol: "ADA" } },
      { rawData: { symbol: "DOT" } },
    ],
  },
};

<Filter
  data={data}
  placeholder="Partial or multiple words..."
  include={[
    "default",
    "currencies.crypto>rawData.symbol",
    "currencies.pairs",
  ]}

  // 2. set filtered data to use for
  // conditional rendering...
  callback={newData => setFiltered(newData)}
/>
`;