import React, { Fragment, useState } from "react";
import { authRouteCode } from './codeSamples';
import { authRouteTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Button from 'components/Button/Button';

const tokenName = "xerumSampleToken";

const SectionAuthRoute = props => {
  const [ token, setToken ] = useState(localStorage.getItem(tokenName) || false);

  const renderSample = () => {
    if (token) {
      return (
        <Fragment>
          <div className="blue">
            <i className="fa-solid fa-lock-open" /> Route unlocked
          </div>

          <p>User can access all routes.</p>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <div className="red">
          <i className="fa-solid fa-lock" /> Route Locked
        </div>

        <p>
          User will see auth. route only.<br />
          (Sample auth form below)
        </p>

        <input type="text" placeholder="Username" value="Username" disabled />
        <input type="password" placeholder = "Password" value="Password" disabled />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div>
        <h3 id="auth-route">{`<AuthRoute />`}</h3>

        <Table content={authRouteTable} className="xTable" />

        {codeSnippet("<AuthRoute />")} should be placed in React Router's&nbsp;
        <em>element</em> prop, with the actual {codeSnippet("<Route />")} you
        are protecting as a child component. Please see the code sample as well as&nbsp;
        <a href="https://reactrouter.com/docs" target="_blank">React Router's docs</a> for
        details regarding proper {codeSnippet("<Route />")} usage.

        <p>
          <strong>Note</strong>:&nbsp;
          The value of the <strong>auth</strong> prop should come from the
          result of your token validation process in app state.
        </p>
      </div>

      <SampleBox name="Auth. Route" code={authRouteCode}>
        <div className="fullWidth column center">
          {renderSample()}
          <Button
            style={{ width: "100%" }}
            hoverStyle={{ width: "100%" }}
            text={token ? "Clear token" : "Log in"}
            callback={() => {
              setToken(!token)
              if (token) localStorage.removeItem(tokenName);
              if (!token) localStorage.setItem(tokenName, true);
            }}
          />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionAuthRoute;