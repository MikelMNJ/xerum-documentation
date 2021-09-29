import React, { Fragment } from "react";
import { brandCode } from './codeSamples';
import { brandTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Brand from 'components/Brand/Brand';

const SectionBrand = props => {
  return (
    <Fragment>
      <div>
        <h3 id="brand">{`<Brand />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(brandTable)}
        </Table>
      </div>

      <SampleBox name="Brand" code={brandCode}>

      </SampleBox>
    </Fragment>
  );
};

export default SectionBrand;