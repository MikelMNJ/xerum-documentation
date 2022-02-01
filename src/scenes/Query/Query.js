import React, { useState } from 'react';
import SectionFilter from './SectionFilter';
import SectionSearch from './SectionSearch';

const Query = props => {
  return (
    <section id="query">
      <SectionFilter />
      <SectionSearch />
    </section>
  );
};

export default Query;