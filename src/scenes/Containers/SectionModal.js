import React, { Fragment } from 'react';
import { modalCode } from './codeSamples';
import { modalTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Modal from 'components/Modal/Modal';
import Table from 'components/Table/Table';

const SectionModal = props => {
  return (
    <Fragment>
      <div>
        <h3 id="modal">{`<Modal />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(modalTable)}
        </Table>
      </div>

      <SampleBox name="Modal" code={modalCode}>
        <Modal />
      </SampleBox>
    </Fragment>
  );
};

export default SectionModal;