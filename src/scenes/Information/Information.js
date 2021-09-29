import React, { useState } from 'react';
import SectionCopyright from './SectionCopyright';
import SectionBrand from './SectionBrand';
import SectionSocial from './SectionSocial';
import SectionTooltip from './SectionTooltip';

const Information = props => {
  return (
    <section id="information">
      <SectionCopyright />
      <SectionBrand />
      <SectionSocial />
      <SectionTooltip />
    </section>
  );
};

export default Information;