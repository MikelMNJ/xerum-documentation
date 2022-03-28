import React from 'react';
import { filtered } from 'helpers/stateHelpers';
import SectionAccordion from './SectionAccordion';
import SectionCard from './SectionCard';
import SectionConfirm from './SectionConfirm';
import SectionModal from './SectionModal';
import SectionSlideOver from './SectionSlideOver';
import SectionTable from './SectionTable';
import SectionTabs from './SectionTabs';

const Containers = props => {
  return (
    <section id="containers">
      {filtered("Accordion") && <SectionAccordion />}
      {filtered("Card") && <SectionCard />}
      {filtered("Confirm") && <SectionConfirm />}
      {filtered("Modal") && <SectionModal />}
      {filtered("Slide-Over") && <SectionSlideOver />}
      {filtered("Table") && <SectionTable />}
      {filtered("Tabs") && <SectionTabs />}
    </section>
  );
};

export default Containers;