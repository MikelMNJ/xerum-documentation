import React, { Fragment } from "react";
import { progressCode } from './codeSamples';
import { progressTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Progress from 'components/Progress/Progress';
import colors from 'theme/colors.scss';

const SectionProgress = props => {
  return (
    <Fragment>
      <div>
        <h3 id="progress">{`<Progress />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(progressTable)}
        </Table>

        <p />
      </div>

      <SampleBox name="Progress" code={progressCode}>
        <Progress />
      </SampleBox>
    </Fragment>
  );
};

export default SectionProgress;