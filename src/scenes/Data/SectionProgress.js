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
        can still be used if desired, but {codeSnippet("!important", false, "css")} tags may be required
        to override some styles.

        <p />
        Use the following CSS heirarchy for custom styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName .progress .pct {}", false, "css")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Progress />")} container by default.
        <p />
      </div>

      <SampleBox name="Progress" className="unset" code={progressCode}>
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