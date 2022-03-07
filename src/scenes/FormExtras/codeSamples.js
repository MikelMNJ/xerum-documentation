
export const checkboxCode = `import Formik from 'formik';
import * as yup from 'yup';

const defaults = { sampleCheckbox: false };
const schema = yup.object().shape({
  sampleCheckbox: yup
    .bool()
    .oneOf([true], 'Field is required.')
});

const handleSubmit = args => {
  const { values, setSubmitting, resetForm } = args;
  // Your submit action from state...
};

<Formik
  initialValues={defaults}
  validationSchema={schema}
  enableReinitialization={true}
  onSubmit={(values, { setSubmitting, resetForm }) => {
    const args = { values, setSubmitting, resetForm };
    handleSubmit(args);
}}>
  {form => (
    <Form>
      <Checkbox
        name="sampleCheckbox"
        label="I agree to the Terms."
      />

      <div>
        <FieldError name="sampleCheckbox" />
      </div>

      <Button type="submit" />
    </Form>
  )}
</Formik>`;

export const fieldSliderCode = `<FieldSlider />`;

export const toggleCode = `<Toggle />`;