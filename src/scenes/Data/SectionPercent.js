import React, { Fragment } from "react";
import { percentCode } from './codeSamples';
import { percentTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Percent from 'components/Percent/Percent';
import colors from 'theme/colors.scss';

const SectionPercent = props => {
  return (
    <Fragment>
      <div>
        <h2>Data</h2>
        <h3 id="percent">{`<Percent />`}</h3>

        <Table content={percentTable} className="xTable" />

        <p />
      </div>

      <SampleBox name="Percent" code={percentCode}>
        <strong style={{ color: colors.blue }}>
          <Percent current={3483.432} total={60} usePlus />
        </strong>
      </SampleBox>
    </Fragment>
  );
};

export default SectionPercent;