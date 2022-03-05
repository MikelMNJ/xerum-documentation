import React from 'react';
import { filtered } from 'helpers/stateHelpers';
import SectionButton from './SectionButton';

const Buttons = props => {
  return (
    <section id="buttons">
      {filtered("Buttons") && <SectionButton />}
    </section>
  );
};

export default Buttons;