import React, { Fragment } from "react";
import { toTopCode } from './codeSamples';
import { toTopTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import ToTop from 'components/ToTop/ToTop';

const sampleTop = {
  position: "relative",
};

const SectionToTop = props => {
  return (
    <Fragment>
      <div>
        <h3 id="to-top">{`<ToTop />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(toTopTable)}
        </Table>
      </div>

      <SampleBox name="To-Top" code={toTopCode}>
        <ToTop style={sampleTop} />
      </SampleBox>
    </Fragment>
  );
};

export default SectionToTop;