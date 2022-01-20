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

export const fieldErrorCode = `import Formik from 'formik';
import * as yup from 'yup';

const defaults = { email: "" };
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email.')
    .required('Field is required.')
    .trim(),
});

const handleSubmit = args => {
  const { values, setSubmitting } = args;
  // Your submit action from state...
};

<Formik
  initialValues={defaults}
  validationSchema={schema}
  enableReinitialization={true}
  onSubmit={(values, { setSubmitting }) => {
    handleSubmit({ values, setSubmitting });
  }}>
    {form => (
      <Form>
        <Field type="text" name="email" />
        <FieldError name="email" />
        <Button type="submit" />
      </Form>
    )}
</Formik>`;

export const ToggleCode = `<Toggle />`;