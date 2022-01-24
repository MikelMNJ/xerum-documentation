
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
  animalOfWeek: "Cat",
  animals: {
    mammals: {
      land: ["Cat", "Dog"],
      sea: ["Dolphin", "Otter"],
      air: ["Bat"],
    },
    reptiles: ["Iguana", "Turtle", "Snake"],
    amphibians: ["Frog", "Axolotl"],
  },
};

<Filter
  data={data}
  placeholder="Partial or multiple word(s)..."
  include={[
    "animalOfWeek",
    "animals.mammals.land",
    "animals.mammals.sea",
    "animals.mammals.air",
    "animals.reptiles",
    "animals.amphibians",
  ]}

  // 2. set filtered data to use for
  // conditional rendering...
  callback={newData => setFiltered(newData)}
/>
`;