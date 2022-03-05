import React from 'react';
import { filtered } from 'helpers/stateHelpers';
import SectionMenu from './SectionMenu';
import SectionPagination from './SectionPagination';

const Navigation = props => {
  return (
    <section id="navigation">
      {filtered("Menu") && <SectionMenu />}
      {filtered("Pagination") && <SectionPagination />}
    </section>
  );
};

export default Navigation;