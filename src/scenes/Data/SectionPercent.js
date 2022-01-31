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
        <h3 id="percent">{`<Percent />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(percentTable)}
        </Table>

        <strong>Tip</strong>: Try putting the {codeSnippet("<Progress />")}&nbsp;
        and {codeSnippet("<Percent />")} components together in different ways
        and placements.

        <p />
      </div>

      <SampleBox name="Percent" code={percentCode}>
        <strong style={{ color: colors.blue }}>
          <Percent current={4354.432} total={7200} />
        </strong>
      </SampleBox>
    </Fragment>
  );
};

export default SectionPercent;