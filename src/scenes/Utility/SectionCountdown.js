import React, { Fragment } from "react";
import { countdownCode } from './codeSamples';
import { countdownTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Countdown from 'components/Countdown/Countdown';
import moment from "moment";

const SectionCountdown = props => {
  return (
    <Fragment>
      <div>
        <h3 id="countdown">{`<Countdown />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(countdownTable)}
        </Table>

        <strong>Note</strong>: If you need to countdown using years,
        pass a fixed <strong>end</strong> date object.
      </div>

      <SampleBox name="Countdown" code={countdownCode}>
        <Countdown timeframe="hours" aggregate={4} />
      </SampleBox>
    </Fragment>
  );
};

export default SectionCountdown;