import React from 'react';
import SectionMenu from './SectionMenu';
import SectionPagination from './SectionPagination';

const Navigation = props => {
  return (
    <section id="navigation">
      <SectionMenu />
      <SectionPagination />
    </section>
  );
};

export default Navigation;