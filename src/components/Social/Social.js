import React from 'react';
import { Link } from 'react-router-dom';
import './Social.scss';

const Social = props => {
  return (
    <div className="social">
      <Link to={{ pathname: "https://npmjs.org" }} target="_blank">
        <i className="fab fa-npm" />
      </Link>

      <Link to={{ pathname: "https://github.com/mikelmnj/xerum" }} target="_blank">
        <i className="fab fa-github" />
      </Link>
    </div>
  );
};

export default Social;