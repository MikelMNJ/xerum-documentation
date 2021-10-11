import React, { Fragment } from "react";
import { heartbeatCode } from './codeSamples';
import { heartbeatTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Heartbeat from 'components/Heartbeat/Heartbeat';

const SectionHeartbeat = props => {
  return (
    <Fragment>
      <div>
        <h2>Utility</h2>
        <h3 id="heartbeat">{`<Heartbeat />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(heartbeatTable)}
        </Table>
      </div>

      <SampleBox name="Heartbeat" code={heartbeatCode}>
        <Heartbeat />
      </SampleBox>
    </Fragment>
  );
};

export default SectionHeartbeat;