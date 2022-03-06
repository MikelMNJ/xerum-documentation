import React, { Fragment, useState } from 'react';
import { confirmCode } from './codeSamples';
import { confirmTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Confirm from 'components/Confirm/Confirm';
import Table from 'components/Table/Table';
import Button from 'components/Button/Button';

const SectionConfirm = props => {
  const [ visible, setVisible ] = useState(false);

  return (
    <Fragment>
      <div>
        <h3 id="confirm">{`<Confirm />`}</h3>

        <Table content={confirmTable} className="xTable" columnLayout={columnLayout} />

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName .title {}", false, "css")}<br />
        {codeSnippet(".yourClassName .message {}", false, "css")}<br />
        {codeSnippet(".yourClassName .confirm button {}", false, "css")}<br />
        {codeSnippet(".yourClassName .cancel button {}", false, "css")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Confirm />")} container by default.
        <p />
      </div>

      <SampleBox name="Confirm" code={confirmCode}>
        <Button
          type="solid"
          text={`${visible ? "Hide" : "Show"} dialogue`}
          callback={() => setVisible(!visible)}
        />

        {visible && (
          <Confirm
            title="Confirm Title..."
            message="You have asked the user to respond."
            onConfirm={() => null}
            onCancel={() => setVisible(!visible)}
            bgClose
          />
        )}
      </SampleBox>
    </Fragment>
  );
};

export default SectionConfirm;