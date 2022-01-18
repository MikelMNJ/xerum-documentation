export const fieldReqsCode = `
const fName = Bob;
const lName = Belcher;

<FieldReqs
  value={inputVal}
  upper
  lower
  number
  min={8}
  special={@#$%^&+=!}
  exclude={[fName, lName]}
/>
`;

export const fieldErrorCode = `<FieldError />`;

export const ToggleCode = `<Toggle />`;