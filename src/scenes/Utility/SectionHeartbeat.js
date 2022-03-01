import React, { useState, Fragment } from 'react';
import { heartbeatCode } from './codeSamples';
import { heartbeatTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Heartbeat from 'components/Heartbeat/Heartbeat';
import Button from 'components/Button/Button';
import process from 'process';
import colors from 'theme/colors.scss';
import 'components/Heartbeat/Heartbeat.scss';

const { env: { NODE_ENV } } = process;
const dev = NODE_ENV !== "production";
const style = { minWidth: "9rem" };

const SectionHeartbeat = props => {
  const [ outage, setOutage ] = useState(false);
  const iconStyle = {
    color: (outage && colors.red) || (dev ? colors.yellow : colors.blue),
  };

  const demoChildren = () => {
    if (outage) {
      return (
        <p>
          No {dev && "Dev. "}connection detected.<br />
          {`(simulated${dev ? ", no connection checks" : ""})`}
        </p>
      );
    }

    return (
      <p>
        <strong>Online</strong>:
        Rendering {dev && "Dev. "}App...<br />
        {dev && "(no connection checks)"}
      </p>
    );
  };

  return (
    <Fragment>
      <div>
        <h3 id="heartbeat">{`<Heartbeat />`}</h3>

        <Table content={heartbeatTable} className="xTable" />

        <p>
          <strong>Tip</strong>: It is recommended to pass your <i>NODE_ENV</i>&nbsp;
          flag/conditional to the <strong>disabled</strong> prop.
        </p>

        <strong>Note</strong>:
        This component will not render to the DOM until the internet connection
        goes out &mdash; your main {codeSnippet("<App />")} is rendered
        by default.
      </div>

      <SampleBox name="Heartbeat" code={heartbeatCode}>
        <div className="column center">
          <Heartbeat disabled={dev}>
            <div className="flatline">
              <i className={`fa-solid fa-${outage ? "ethernet" : "heartbeat"}`} style={iconStyle} />
              {demoChildren()}
            </div>
          </Heartbeat>

          <Button
            text={outage ? "Simulate restore" : "Simulate outage"}
            style={style}
            hoverStyle={style}
            callback={() => setOutage(!outage)}
          />

          <p>
            ... or disable your N.I.C. for the real deal.
          </p>
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionHeartbeat;