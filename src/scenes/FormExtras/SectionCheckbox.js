import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { checkboxCode } from './codeSamples';
import { checkboxTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Checkbox from 'components/Checkbox/Checkbox';
import FieldError from 'components/FieldError/FieldError';
import Button from 'components/Button/Button';
import * as yup from 'yup';
import colors from 'theme/colors.scss';

const SectionCheckbox = props => {
  const defaults = { sampleCheckbox: false };
  const schema = yup.object().shape({
    sampleCheckbox: yup.bool().oneOf([true], 'Field is required.')
  });

  const handleSubmit = args => {
    const { values, setSubmitting, resetForm } = args;
  };

  return (
    <Fragment>
      <div>
        <h2 id="checkbox">Form Extras</h2>
        <h3>{`<Checkbox />`}</h3>

        <Table content={checkboxTable} className="xTable" columnLayout={columnLayout} />

        <p>*Required Prop.</p>

        <strong>Note</strong>: The {codeSnippet("<Checkbox />")} component uses&nbsp;
        <i>Formik</i> for field state management and should be used within Formik's&nbsp;
        {codeSnippet("<Form />")} tag.  The associated example shows a proper&nbsp;
        <i>Formik</i> setup with <i>yup</i> handling validation rules.

        <p />

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName .markContainer .box {}", false, "css")}<br />
        {codeSnippet(".yourClassName .markContainer .check {}", false, "css")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Checkbox />")} container by default.
        <p />
      </div>

      <SampleBox name="Checkbox" code={checkboxCode}>
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

              <div className="checkboxError">
                <FieldError name="sampleCheckbox" />
              </div>

              <Button type="submit" />
            </Form>
          )}
        </Formik>
      </SampleBox>
    </Fragment>
  );
};

export default SectionCheckbox;