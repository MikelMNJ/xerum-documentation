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

        <strong>Note</strong>: Use the <i>color</i> and <i>bgColor</i> props
        if you need custom colors. A custom className can still be used if desired, but&nbsp;
        <i>!important</i> tags may be required to override some styles.
        Use "<i>yourClassName .progress</i>" to style the progress bar itself &mdash;
        custom className's only affect the parent container by default.

        <p />
      </div>

      <SampleBox name="Progress" code={progressCode}>
        <Progress current={4354.432} total={7200} />
        <p />
      </SampleBox>
    </Fragment>
  );
};

export default SectionProgress;