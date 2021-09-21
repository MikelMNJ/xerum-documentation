import React, { Fragment } from "react";
import { loadFailCode } from './codeSamples';
import { loadFailTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';

const SectionLoadFail = props => {
  return (
    <Fragment>
      <div>
        <h3 id="load-fail">{`<LoadFail />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(loadFailTable)}
        </Table>

        <p>
          Additional text...
        </p>
      </div>

      <SampleBox name="LoadFail" code={loadFailCode}>

      </SampleBox>
    </Fragment>
  );
};

export default SectionLoadFail;