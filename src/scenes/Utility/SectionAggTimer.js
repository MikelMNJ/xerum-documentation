import React, { Fragment } from "react";
import { aggTimerCode } from './codeSamples';
import { aggTimerTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import AggTimer from 'components/AggTimer/AggTimer';

const SectionAggTimer = props => {
  return (
    <Fragment>
      <div>
        <h3 id="agg-timer">{`<AggTimer />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(aggTimerTable)}
        </Table>
      </div>

      <SampleBox name="AggTimer" code={aggTimerCode}>
        <AggTimer
          details
          timeframe="months"
          aggregate={3}
          callback={() => console.log("End")}
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionAggTimer;