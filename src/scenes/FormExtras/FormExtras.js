import React from 'react';
import { filtered } from 'helpers/stateHelpers';
import SectionCheckbox from './SectionCheckbox';
import SectionFieldSlider from './SectionFieldSlider';
import SectionToggle from './SectionToggle';

const Data = props => {
  return (
    <section id="form-extras">
      {filtered("Checkbox") && <SectionCheckbox />}
      {filtered("Field Slider") && <SectionFieldSlider />}
      {filtered("Toggle") && <SectionToggle />}
    </section>
  );
};

export default Data;