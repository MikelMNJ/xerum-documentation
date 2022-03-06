import React, { Fragment } from "react";
import { statusCode } from './codeSamples';
import { statusTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Status from 'components/Status/Status';
import colors from 'theme/colors.scss';

const SectionStatus = props => {
  return (
    <Fragment>
      <div>
        <h3 id="status">{`<Status />`}</h3>

        <Table content={statusTable} className="xTable" columnLayout={columnLayout} />

        <p>
          <strong>Note</strong>: The examples provided are hard-coded for clarity,
          but should receive their colors, dynamically, from app state.
        </p>
      </div>

      <SampleBox name="Status" code={statusCode}>
        <div>
          <Status color={colors.green} text="App servers" />
          <Status color={colors.yellow} text="Media servers" />
          <Status color={colors.red} text="Email sending" />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionStatus;