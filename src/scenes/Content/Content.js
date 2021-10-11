import React from 'react';
import GettingStarted from 'scenes/GettingStarted/GettingStarted';
import Buttons from 'scenes/Buttons/Buttons';
import Feedback from 'scenes/Feedback/Feedback';
import Information from 'scenes/Information/Information';
import Utility from 'scenes/Utility/Utility';
import './Content.scss';

const Content = props => {
  return (
    <div id="content">
      <GettingStarted />
      <Buttons />
      <Feedback />
      <Information />
      <Utility />
    </div>
  );
};

export default Content;