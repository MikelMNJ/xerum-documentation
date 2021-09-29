import React, { Fragment } from "react";
import { tooltipCode } from './codeSamples';
import { tooltipTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Tooltip from 'components/Tooltip/Tooltip';

const SectionTooltip = props => {
  return (
    <Fragment>
      <div>
        <h3 id="tooltip">{`<Tooltip />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(tooltipTable)}
        </Table>
      </div>

      <SampleBox name="Tooltip" code={tooltipCode}>

      </SampleBox>
    </Fragment>
  );
};

export default SectionTooltip;