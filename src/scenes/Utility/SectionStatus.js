import React, { Fragment } from "react";
import { statusCode } from './codeSamples';
import { statusTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
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

        <Table headers={[ "NAME", "DESCRIPTION", "DEFAULT" ]}>
          {buildRows(statusTable)}
        </Table>
      </div>

      <SampleBox name="Status" code={statusCode}>
        <div className="inline">
          <Status color={colors.red} />
          <Status color={colors.yellow} />
          <Status color={colors.green} />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionStatus;