import React from 'react';
import GettingStarted from 'scenes/GettingStarted/GettingStarted';
import Buttons from 'scenes/Buttons/Buttons';
import Feedback from 'scenes/Feedback/Feedback';
import Information from 'scenes/Information/Information';
import Utility from 'scenes/Utility/Utility';
import Query from 'scenes/Query/Query';
import Data from 'scenes/Data/Data';
import Containers from 'scenes/Containers/Containers';
import './Content.scss';

const Content = props => {
  return (
    <div id="content">
      <GettingStarted />
      <Buttons />
      <Containers />
      <Data />
      <Feedback />
      <Information />
      <Query />
      <Utility />
    </div>
  );
};

export default Content;