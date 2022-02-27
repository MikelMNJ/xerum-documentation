export const messagesCode = `const newMessage = "You've been notified!";

// 1. Ready action/selector array in app state.
const [ messages, setMessages ] = useState([]);

// 2. Place Messages component in root component
// and pass the messages array action/selector.
<Messages
  time={3000}
  messages={messages}
  setMessages={setMessages}
/>

// 3. Trigger message action from any
// component event or API callback.
<Button
  text="Click to Notify"
  callback={() => (
    setMessages([ ...messages, newMessage ])
  )}
/>`;

export const notFoundCode = `// Default
<NotFound />

// Custom
<NotFound
  className="customNotFound"
  icon="fa-solid fa-face-frown-open"
  title="Well, shucks!"
  message="Something's missing."
/ >
`;

export const loadingCode = `// General use
<Loading
  isLoading={contentLoading}
  hasData={contentData}
>
  {/*
    Your content after loading has finished
    and 200 response data set in app state.
  */}

  <i className="fa-solid fa-thumbs-up" />
  All good.
</Loading>
`;

export const badgeCode = `// Default
<Button icon="fa-solid fa-bell">
  <Badge className="pos" count={4} />
</Button>

// Square
<Button icon="fa-solid fa-envelope">
  <Badge className="pos" count={1296} square />
</Button>`;

export const bannerCode = `<Banner
  center
  className="customBanner"
  callback={handleClose}
>
  <i className="fa-solid fa-exclamation" />
  <strong>Reminder</strong>:
  Servers will be down.
</Banner>`;

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