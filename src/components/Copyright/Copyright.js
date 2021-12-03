import React, { Fragment } from 'react';
import colors from 'theme/colors.scss';
import moment from 'moment';
import './Copyright.scss';

const Copyright = props => {
  const { name, trade, rights, ...rest } = props;
  const year = moment().year();
  const defaultRights = "All rights reserved.";
  const hasRights = rights?.length > 0;
  const message = hasRights ? rights : defaultRights;

  return (
    <div className="copyright" {...rest}>
      {trade && <span>&reg; &amp;</span>}&copy;{year} {name}
      {rights && ` — ${message}`}
    </div>
  );
};

export default Copyright;