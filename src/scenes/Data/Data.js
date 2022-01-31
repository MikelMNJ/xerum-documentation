import React, { useState } from 'react';
import SectionProgress from './SectionProgress';
import SectionPrice from './SectionPrice';
import SectionPercent from './SectionPercent';

const Data = props => {
  return (
    <section id="data">
      <SectionProgress />
      <SectionPrice />
      <SectionPercent />
    </section>
  );
};

export default Data;