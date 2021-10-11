import React, { Fragment } from "react";
import { countdownCode } from './codeSamples';
import { countdownTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Countdown from 'components/Countdown/Countdown';

const SectionCountdown = props => {
  return (
    <Fragment>
      <div>
        <h3 id="countdown">{`<Countdown />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(countdownTable)}
        </Table>
      </div>

      <SampleBox name="Countdown" code={countdownCode}>
        <Countdown />
      </SampleBox>
    </Fragment>
  );
};

export default SectionCountdown;