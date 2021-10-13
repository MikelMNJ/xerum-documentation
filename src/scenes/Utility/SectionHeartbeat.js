import React, { Fragment } from "react";
import { heartbeatCode } from './codeSamples';
import { heartbeatTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Heartbeat from 'components/Heartbeat/Heartbeat';
import process from 'process';

const { env: { NODE_ENV } } = process;

const SectionHeartbeat = props => {
  return (
    <Fragment>
      <div>
        <h2>Utility</h2>
        <h3 id="heartbeat">{`<Heartbeat />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(heartbeatTable)}
        </Table>

        <p>
          <strong>Tip</strong>: It is strongly recommended to pass your
          environment feature flag/conditional to <strong>disabled</strong> &mdash;
          this component does not render a visible element to the DOM.
        </p>
      </div>

      <SampleBox name="Heartbeat" code={heartbeatCode}>
        <div className="column center">
          <Heartbeat disabled={NODE_ENV !== "production"} />
          <p>(Not rendered to the DOM)</p>
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionHeartbeat;