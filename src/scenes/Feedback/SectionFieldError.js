import React, { useState, Fragment } from "react";
import { fieldErrorCode } from './codeSamples';
import { fieldErrorTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import FieldError from 'components/FieldError/FieldError';
import Button from 'components/Button/Button';
import colors from 'theme/colors.scss';

const SectionFieldError = props => {
  const defaults = {
    email: ""
  };

  const schema = yup.object().shape({
    email: yup.string()
      .email('Invalid email.')
      .required('Field is required.')
      .trim(),
  });

  const handleSubmit = args => {
    const { values, setSubmitting, resetForm } = args;
  };

  return (
    <Fragment>
      <div>
        <h3 id="field-error">{`<FieldError />`}</h3>

        <Table content={fieldErrorTable} className="xTable" />

        <p>*Required Prop.</p>

        <strong>Note</strong>: The {codeSnippet("<FieldError />")} component uses&nbsp;
        <i>Formik</i> for field state management and should be used within Formik's&nbsp;
        {codeSnippet("<Form />")} tag.  The associated example shows a proper&nbsp;
        <i>Formik</i> setup with <i>yup</i> handling validation rules.
      </div>

      <SampleBox name="FieldError" code={fieldErrorCode}>
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
                <Field type="text" name="email" placeholder="Email" />
                <FieldError name="email" />

                <Button type="submit" />
              </Form>
            )}
        </Formik>
      </SampleBox>
    </Fragment>
  );
};

export default SectionFieldError;