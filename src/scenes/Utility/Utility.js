import React, { useState } from 'react';
import { filtered } from 'helpers/stateHelpers';
import SectionHeartbeat from './SectionHeartbeat';
import SectionAuthRoute from './SectionAuthRoute';
import SectionToTop from './SectionToTop';
import SectionAggTimer from './SectionAggTimer';
import SectionStatus from './SectionStatus';

const Information = props => {
  return (
    <section id="utility">
      {filtered("AggTimer") && <SectionAggTimer />}
      {filtered("AuthRoute") && <SectionAuthRoute />}
      {filtered("Heartbeat") && <SectionHeartbeat />}
      {filtered("Status") && <SectionStatus />}
      {filtered("ToTop") && <SectionToTop />}
    </section>
  );
};

export default Information;