import React, { Fragment } from 'react';
import { popOverCode } from './codeSamples';
import { popOverTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import PopOver from 'components/PopOver/PopOver';
import Table from 'components/Table/Table';

const SectionPopOver = props => {
  return (
    <Fragment>
      <div>
        <h3 id="pop-over">{`<PopOver />`}</h3>

        <Table content={popOverTable} className="xTable" />
      </div>

      <SampleBox name="Pop-Over" code={popOverCode}>
        <PopOver />
      </SampleBox>
    </Fragment>
  );
};

export default SectionPopOver;