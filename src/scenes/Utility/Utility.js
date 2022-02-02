import React, { useState } from 'react';
import SectionHeartbeat from './SectionHeartbeat';
import SectionAuthRoute from './SectionAuthRoute';
import SectionToTop from './SectionToTop';
import SectionAggTimer from './SectionAggTimer';
import SectionStatus from './SectionStatus';

const Information = props => {
  return (
    <section id="utility">
      <SectionAggTimer />
      <SectionAuthRoute />
      <SectionHeartbeat />
      <SectionStatus />
      <SectionToTop />
    </section>
  );
};

export default Information;