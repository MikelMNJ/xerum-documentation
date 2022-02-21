import React, { Fragment } from "react";
import { menuCode } from './codeSamples';
import { menuTable } from './tables';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Menu from 'components/Menu/Menu';
import colors from 'theme/colors.scss';

const SectionMenu = props => {
  return (
    <Fragment>
      <div>
        <h2 id="menu">Navigation</h2>
        <h3>{`<Menu />`}</h3>

        <Table content={menuTable} className="xTable" />

        <p />
      </div>

      <SampleBox name="Menu" code={menuCode}>
        <Menu />
      </SampleBox>
    </Fragment>
  );
};

export default SectionMenu;