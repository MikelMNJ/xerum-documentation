import React, { Fragment, useState } from 'react';
import { modalCode } from './codeSamples';
import { modalTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import { dismiss } from 'helpers/animations';
import Button from 'components/Button/Button';
import SampleBox from 'components/SampleBox/SampleBox';
import Modal from 'components/Modal/Modal';
import Table from 'components/Table/Table';
import colors from 'theme/colors.scss';

const SectionModal = props => {
  const [ visible, setVisible ] = useState(false);

  const toggle = () => {
    const modal = document.querySelector(".modal");
    const modalBG = document.querySelector(".modalBG");
    const args = {
      onClose: () => setVisible(!visible),
      targets: [ modal, modalBG ],
    };

    if (visible) return dismiss(args);
    setVisible(!visible);
  };

  return (
    <Fragment>
      <div>
        <h3 id="modal">{`<Modal />`}</h3>

        <Table content={modalTable} className="xTable" />
      </div>

      <SampleBox name="Modal" code={modalCode}>
        <Button
          text={`${visible ? "Hide" : "Show"}`}
          callback={toggle}
        />

        {visible && (
          <Modal
            title="Modal title..."
            onClose={() => setVisible(!visible)}
            bgClose
          >
            <p>Modal content...</p>
          </Modal>
        )}
      </SampleBox>
    </Fragment>
  );
};

export default SectionModal;