import React, { useState } from 'react';
import SectionProgress from './SectionProgress';
import SectionPrice from './SectionPrice';
import SectionPercent from './SectionPercent';

const Data = props => {
  return (
    <section id="data">
      <SectionPercent />
      <SectionPrice />
      <SectionProgress />
    </section>
  );
};

export default Data;