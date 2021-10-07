import React, { useState } from 'react';
import SectionCopyright from './SectionCopyright';
import SectionSocial from './SectionSocial';
import SectionTooltip from './SectionTooltip';

const Information = props => {
  return (
    <section id="information">
      <SectionCopyright />
      <SectionSocial />
      <SectionTooltip />
    </section>
  );
};

export default Information;