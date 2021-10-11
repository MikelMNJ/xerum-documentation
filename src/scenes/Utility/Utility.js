import React, { useState } from 'react';
import SectionHeartbeat from './SectionHeartbeat';
import SectionAuthRoute from './SectionAuthRoute';
import SectionToTop from './SectionToTop';
import SectionCountdown from './SectionCountdown';
import SectionStatus from './SectionStatus';

const Information = props => {
  return (
    <section id="utility">
      <SectionHeartbeat />
      <SectionAuthRoute />
      <SectionToTop />
      <SectionCountdown />
      <SectionStatus />
    </section>
  );
};

export default Information;