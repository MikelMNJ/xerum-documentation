import React, { Fragment } from 'react';
import { buttonCode } from './codeSamples';
import { buttonTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Button from 'components/Button/Button';
import Table from 'components/Table/Table';

const SectionButton = props => {
  return (
    <Fragment>
      <div>
        <h2>Buttons</h2>
        <h3 id="button">{`<Button />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(buttonTable)}
        </Table>
      </div>

      <SampleBox name="Button" code={buttonCode}>
        <div className="multiline">
          <div >
            <Button icon="fab fa-google" url="google.com" target="_blank" />
            <Button text="Submit" type="submit" btnType="ghost" />
            <Button icon="fas fa-pencil-alt" text="Edit Profile" btnType="transparent" />
          </div>

          <div>
            <Button disabled icon="fab fa-google" url="google.com" target="_blank" />
            <Button disabled text="Submit" type="submit" btnType="ghost" />
            <Button disabled icon="fas fa-pencil-alt" text="Edit Profile" btnType="transparent" />
          </div>
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionButton;