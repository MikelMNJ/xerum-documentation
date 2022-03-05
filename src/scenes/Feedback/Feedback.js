import React, { useState } from 'react';
import { filtered } from 'helpers/stateHelpers';
import Notifications from './SectionNotifications';
import NotFound from './SectionNotFound';
import Loading from './SectionLoading';
import Badge from './SectionBadge';
import Banner from './SectionBanner';
import SectionFieldReqs from './SectionFieldReqs';
import SectionFieldError from './SectionFieldError';

const Feedback = props => {
  return (
    <section id="feedback">
      {filtered("Badge") && <Badge />}
      {filtered("Banner") && <Banner />}
      {filtered("Field Error") && <SectionFieldError />}
      {filtered("Field Reqs") && <SectionFieldReqs />}
      {filtered("Loading") && <Loading />}
      {filtered("NotFound") && <NotFound />}
      {filtered("Notifications") && <Notifications />}
    </section>
  );
};

export default Feedback;