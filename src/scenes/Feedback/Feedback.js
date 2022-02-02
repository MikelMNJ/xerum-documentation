import React, { useState } from 'react';
import Messages from './SectionMessages';
import NotFound from './SectionNotFound';
import Loading from './SectionLoading';
import Badge from './SectionBadge';
import Banner from './SectionBanner';
import SectionFieldReqs from './SectionFieldReqs';
import SectionFieldError from './SectionFieldError';

const Feedback = props => {
  return (
    <section id="feedback">
      <Badge />
      <Banner />
      <SectionFieldError />
      <SectionFieldReqs />
      <Loading />
      <Messages />
      <NotFound />
    </section>
  );
};

export default Feedback;