export const fieldReqsCode = `const [ inputVal, setInputVal ] = useState("");

const fName = "Bob";
const lName = "Belcher";

<input
  type="password"
  placeholder="Type password to test..."
  onChange={e => {
    setInputVal(e.currentTarget.value);
  }}
/>

<FieldReqs
  value={inputVal}
  upper
  lower
  number
  min
  special
  exclude={[
    { display: "First name", value: fName },
    { display: "Last name", value: lName },
  ]}
/>
`;

export const fieldErrorCode = `<FieldError />`;

export const ToggleCode = `<Toggle />`;