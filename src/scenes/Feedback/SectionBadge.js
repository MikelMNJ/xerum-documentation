import React, { Fragment } from "react";
import { badgeCode } from './codeSamples';
import { badgeTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';

const SectionBadge = props => {
  return (
    <Fragment>
      <div>
        <h3 id="badge">{`<Badge />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(badgeTable)}
        </Table>

        <p>
          Additional text...
        </p>
      </div>

      <SampleBox name="Badge" code={badgeCode}>

      </SampleBox>
    </Fragment>
  );
};

export default SectionBadge;