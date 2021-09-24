import React, { useState } from 'react';
import Messages from './SectionMessages';
import NotFound from './SectionNotFound';
import Loading from './SectionLoading';
import Badge from './SectionBadge';
import Banner from './SectionBanner';

const Feedback = props => {
  return (
    <section id="feedback">
      <Messages />
      <NotFound />
      <Loading />
      <Badge />
      <Banner />
    </section>
  );
};

export default Feedback;