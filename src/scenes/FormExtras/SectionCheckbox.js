import React, { Fragment } from "react";
import { checkboxCode } from './codeSamples';
import { checkboxTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Checkbox from 'components/Checkbox/Checkbox';
import colors from 'theme/colors.scss';

const SectionCheckbox = props => {
  return (
    <Fragment>
      <div>
        <h2 id="checkbox">Form Extras</h2>
        <h3>{`<Checkbox />`}</h3>

        <Table content={checkboxTable} className="xTable" columnLayout={columnLayout} />

        <p />
      </div>

      <SampleBox name="Checkbox" code={checkboxCode}>
        <strong>
          <Checkbox />
        </strong>
      </SampleBox>
    </Fragment>
  );
};

export default SectionCheckbox;