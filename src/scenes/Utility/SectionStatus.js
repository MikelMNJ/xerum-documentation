import React, { Fragment } from "react";
import { statusCode } from './codeSamples';
import { statusTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Status from 'components/Status/Status';
import colors from 'theme/colors.scss';

const getColor = status => {
  switch(status) {
    case "online":
      return colors.green;
    case "degraded":
      return colors.yellow;
    case "offline":
      return colors.red;

    default:
      null;
  };
};

const SectionStatus = props => {
  return (
    <Fragment>
      <div>
        <h3 id="status">{`<Status />`}</h3>

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(statusTable)}
        </Table>

        <p>
          <strong>Note</strong>: The examples provided are hard-coded for clarity,
          but should ultimately receive their colors, dynamically, from app state.
        </p>
      </div>

      <SampleBox name="Status" code={statusCode}>
        <div>
          <Status color={getColor("online")} text="App servers" />
          <Status color={getColor("degraded")} text="Media servers" />
          <Status color={getColor("offline")} text="Email sending" />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionStatus;