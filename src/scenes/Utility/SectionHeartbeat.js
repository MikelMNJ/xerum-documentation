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
    color: (outage && colors.red) || (dev ? colors.yellow : colors.green),
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
        <h2>Utility</h2>
        <h3 id="heartbeat">{`<Heartbeat />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(heartbeatTable)}
        </Table>

        <p>
          <strong>Tip</strong>: It is recommended to pass your environment
          feature flag/conditional to <strong>disabled</strong>.
        </p>

        <p>
          <strong>Note</strong>:
          This component will not render an element to the DOM until the internet
          connection goes out. Passing children will override the <strong>icon</strong>&nbsp;
          and <strong>text</strong> props.
        </p>
      </div>

      <SampleBox name="Heartbeat" code={heartbeatCode}>
        <div className="column center">
          <Heartbeat disabled={dev}>
            <div className="flatline">
              <i className={`fas fa-${outage ? "ethernet" : "heartbeat"}`} style={iconStyle} />
              {demoChildren()}
            </div>
          </Heartbeat>

          <Button
            text={outage ? "Simulate restore" : "Simulate outage"}
            style={style}
            hoverStyle={style}
            callback={() => setOutage(!outage)}
          />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionHeartbeat;