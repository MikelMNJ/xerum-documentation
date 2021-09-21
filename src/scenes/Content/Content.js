import React from 'react';
import GettingStarted from 'scenes/GettingStarted/GettingStarted';
import Buttons from 'scenes/Buttons/Buttons';
import Feedback from 'scenes/Feedback/Feedback';
import './Content.scss';

const Content = props => {
  return (
    <div id="content">
      <GettingStarted />
      <Buttons />
      <Feedback />
    </div>
  );
};

export default Content;