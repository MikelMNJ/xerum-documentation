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

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName .topLevel {}")}<br />
        {codeSnippet(".yourClassName .topLevel .subMenuIcon {}")}<br />
        {codeSnippet(".yourClassName .topLevel .icon {}")}<br />

        <p>
          Your custom <i>className</i> will apply to the menu container by default.
        </p>
      </div>

      <SampleBox name="Menu" code={menuCode}>
        <Menu />
      </SampleBox>
    </Fragment>
  );
};

export default SectionMenu;