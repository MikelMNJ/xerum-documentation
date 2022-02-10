import React, { Fragment } from 'react';
import { buttonCode } from './codeSamples';
import { buttonTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Button from 'components/Button/Button';
import Table from 'components/Table/Table';

const SectionButton = props => {
  return (
    <Fragment>
      <div>
        <h2>Buttons</h2>
        <h3 id="button">{`<Button />`}</h3>

        <Table content={buttonTable} className="xTable" />

        <strong>Tip</strong>: The <strong>passthrough</strong> prop is handy if your&nbsp;
        {codeSnippet("<Button />")} component is a child of an element that already has a click
        event &mdash; i.e. within a table data cell of a table row, where the table row
        has a row click handler that overrides the button's click event.
      </div>

      <SampleBox name="Button" code={buttonCode}>
        <div className="multiline">
          <div >
            <Button icon="fa-brands fa-google" url="google.com" target="_blank" />
            <Button text="Submit" type="submit" btnType="ghost" />
            <Button icon="fa-solid fa-pencil-alt" text="Edit Profile" btnType="transparent" />
          </div>

          <div>
            <Button disabled icon="fa-brands fa-google" url="google.com" target="_blank" />
            <Button disabled text="Submit" type="submit" btnType="ghost" />
            <Button disabled icon="fa-solid fa-pencil-alt" text="Edit Profile" btnType="transparent" />
          </div>
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionButton;