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

      <Table content={toTopTable} className="xTable" />
      </div>

      <SampleBox name="To-Top" code={toTopCode}>
        <div className="inline">
          <ToTop style={sampleTop} />
          <ToTop style={sampleTop} sharp />
          <ToTop style={sampleTop} circle />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionToTop;