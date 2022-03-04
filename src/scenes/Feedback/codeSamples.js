export const notificationsCode = `const newNotification = "You've been notified!";

// 1. Ready action/selector array in app state.
const [
  notifications,
  setNotifications
] = useState([]);

// 2. Place Notifications component
// in root component and pass the
// notifications array action/selector.
<Notifications
  time={3000}
  notifications={notifications}
  setNotifications={setNotifications}
/>

// 3. Trigger notification action from any
// component event or API callback.
<Button
  text="Click to Notify"
  callback={() => (
    setNotifications([
      ...notifications,
      newNotification
    ])
  )}
/>`;

export const notFoundCode = `<NotFound />`;

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

export const bannerCode = `const icon = "fa-solid fa-triangle-exclamation";

<Banner
  center
  noClose
  className="customBanner"
  callback={handleClose}
>
  <i className={icon} />
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