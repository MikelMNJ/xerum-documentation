import React, { useState } from 'react';
import SectionFieldReqs from './SectionFieldReqs';
import SectionFieldError from './SectionFieldError';

const FormUtility = props => {
  return (
    <section id="form-elements">
      <SectionFieldReqs />
      <SectionFieldError />
    </section>
  );
};

export default FormUtility;