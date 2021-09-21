import React, { Fragment } from "react";
import { bannerCode } from './codeSamples';
import { bannerTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
const SectionBanner = props => {
  return (
    <Fragment>
      <div>
        <h3 id="banner">{`<Banner />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(bannerTable)}
        </Table>

        <p>
          Additional text...
        </p>
      </div>

      <SampleBox name="Banner" code={bannerCode}>

      </SampleBox>
    </Fragment>
  );
};

export default SectionBanner;