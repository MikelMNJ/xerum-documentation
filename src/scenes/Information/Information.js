import React, { useState } from 'react';
import { filtered } from 'helpers/stateHelpers';
import SectionCopyright from './SectionCopyright';
import SectionSocial from './SectionSocial';
import SectionTooltip from './SectionTooltip';

const Information = props => {
  return (
    <section id="information">
      {filtered("Copyright") && <SectionCopyright />}
      {filtered("Social") && <SectionSocial />}
      {filtered("Tooltip") && <SectionTooltip />}
    </section>
  );
};

export default Information;