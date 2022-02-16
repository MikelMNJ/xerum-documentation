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

        <Table content={progressTable} className="xTable" />

        <strong>Note</strong>: Use the <strong>color</strong>, <strong>bgColor</strong>&nbsp;
        and <strong>pctColor</strong> props if you need custom colors. A custom <i>className</i>&nbsp;
        can still be used if desired, but {codeSnippet("!important")} tags may be required
        to override some styles. Use {codeSnippet(".yourClassName .progress {}")} in your
        style sheet to style the progress bar itself &mdash; custom <i>className</i>'s only affect
        the parent container by default.

        <p />
      </div>

      <SampleBox name="Progress" code={progressCode}>
        <Progress
          current={4354.432}
          total={7200}
          pctColor={colors.white}
        />

        <p />
      </SampleBox>
    </Fragment>
  );
};

export default SectionProgress;