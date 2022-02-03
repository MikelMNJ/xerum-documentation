import React, { Fragment } from 'react';
import { tableCode } from './codeSamples';
import { tableTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Table from 'components/Table/Table';

const content = {
  headers: [ "Header 1", "Header 2", "Header 3" ],
  rows: [
    {
      tData1: "row 1, col 1",
      tData2: "row 1, col 2",
      tData3: "row 1, col 3"
    },
    {
      tData1: "row 2, col 1",
      tData2: "row 2, col 2",
      tData3: "row 2, col 3"
    },
    {
      tData1: "row 3, col 1",
      tData2: "row 3, col 2",
      tData3: "row 3, col 3"
    },
  ],
};

const SectionTable = props => {
  return (
    <Fragment>
      <div>
        <h3 id="table">{`<Table />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(tableTable)}
        </Table>
      </div>

      <SampleBox name="Table" code={tableCode}>
        <Table content={content} />
      </SampleBox>
    </Fragment>
  );
};

export default SectionTable;