export const fieldReqsCode = `
const fName = "Bob";
const lName = "Belcher";

<FieldReqs
  value={inputVal} // From state.
  upper
  lower
  number
  min={8}
  special="@#$%^&+=!"
  exclude={[
    { display: "first name", value: fName },
    { display: "last name", value: lName },
  ]}
/>
`;

export const fieldErrorCode = `<FieldError />`;

export const ToggleCode = `<Toggle />`;