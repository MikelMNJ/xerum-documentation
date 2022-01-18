export const fieldReqsCode = `const [ inputVal, setInputVal ] = useState("");

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
    { display: "First name", value: "Bob" },
    { display: "Last name", value: "Belcher" },
  ]}
/>
`;

export const fieldErrorCode = `<FieldError />`;

export const ToggleCode = `<Toggle />`;