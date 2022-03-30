import React, { useState } from 'react';
import { filtered } from 'helpers/stateHelpers';
import SectionLabel from './SectionLabel';
import SectionProgress from './SectionProgress';
import SectionPrice from './SectionPrice';
import SectionPercent from './SectionPercent';

const Data = props => {
  return (
    <section id="data">
      {filtered("Label") && <SectionLabel />}
      {filtered("Percent") && <SectionPercent />}
      {filtered("Price") && <SectionPrice />}
      {filtered("Progress") && <SectionProgress />}
    </section>
  );
};

export default Data;