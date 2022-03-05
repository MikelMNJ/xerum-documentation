import React, { useState } from 'react';
import { filtered } from 'helpers/stateHelpers';
import SectionFilter from './SectionFilter';
import SectionSearch from './SectionSearch';

const Query = props => {
  return (
    <section id="query">
      {filtered("Filter") && <SectionFilter />}
      {filtered("Search") && <SectionSearch />}
    </section>
  );
};

export default Query;