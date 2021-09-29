import React, { Fragment } from "react";
import { socialCode } from './codeSamples';
import { socialTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Social from 'components/Social/Social';

const SectionSocial = props => {
  return (
    <Fragment>
      <div>
        <h3 id="social">{`<Social />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(socialTable)}
        </Table>
      </div>

      <SampleBox name="Social" code={socialCode}>

      </SampleBox>
    </Fragment>
  );
};

export default SectionSocial;