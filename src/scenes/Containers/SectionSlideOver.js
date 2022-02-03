import React, { Fragment } from 'react';
import { slideOverCode } from './codeSamples';
import { slideOverTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import SlideOver from 'components/SlideOver/SlideOver';
import Table from 'components/Table/Table';

const SectionSlideOver = props => {
  return (
    <Fragment>
      <div>
        <h3 id="slide-over">{`<SlideOver />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(slideOverTable)}
        </Table>
      </div>

      <SampleBox name="Slide-Over" code={slideOverCode}>
        <SlideOver />
      </SampleBox>
    </Fragment>
  );
};

export default SectionSlideOver;