import React, { Fragment } from "react";
import { loadingCode } from './codeSamples';
import { loadingTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';

const SectionLoading = props => {
  return (
    <Fragment>
      <div>
        <h3 id="loading">{`<Loading />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(loadingTable)}
        </Table>

        <p>
          *Required prop.
        </p>
      </div>

      <SampleBox name="Loading" code={loadingCode}>

      </SampleBox>
    </Fragment>
  );
};

export default SectionLoading;