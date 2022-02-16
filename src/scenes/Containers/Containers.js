import React from 'react';
import SectionCard from './SectionCard';
import SectionModal from './SectionModal';
import SectionPopOver from './SectionPopOver';
import SectionSlideOver from './SectionSlideOver';
import SectionTable from './SectionTable';
import SectionTabs from './SectionTabs';

const Containers = props => {
  return (
    <section id="containers">
      <SectionCard />
      <SectionModal />
      <SectionPopOver />
      <SectionSlideOver />
      <SectionTable />
      <SectionTabs />
    </section>
  );
};

export default Containers;