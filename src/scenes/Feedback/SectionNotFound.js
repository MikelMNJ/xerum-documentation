import React, { Fragment } from "react";
import { notFoundCode } from './codeSamples';
import { notFoundTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';

const SectionNotFound = props => {
  return (
    <Fragment>
      <div>
        <h3 id="not-found">{`<NotFound />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(notFoundTable)}
        </Table>

        <p>
          Additional text...
        </p>
      </div>

      <SampleBox name="NotFound" code={notFoundCode}>

      </SampleBox>
    </Fragment>
  );
};

export default SectionNotFound;