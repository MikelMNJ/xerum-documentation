import React, { useState } from 'react';
import SectionFilter from './SectionFilter';
import SectionSearch from './SectionSearch';

const Query = props => {
  return (
    <section id="query">
      <SectionSearch />
      <SectionFilter />
    </section>
  );
};

export default Query;