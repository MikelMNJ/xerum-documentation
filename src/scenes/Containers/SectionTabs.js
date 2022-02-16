import React, { Fragment } from 'react';
import { tabsCode } from './codeSamples';
import { tabsTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Tabs from 'components/Tabs/Tabs';
import Table from 'components/Table/Table';
import colors from 'theme/colors.scss';

const content = [
  { name: "Tab 1", content: "Content 1" },
  { name: "Tab 2", content: "Content 2" },
  { name: "Tab 3", content: "Content 3" },
];

const SectionTabs = props => {
  return (
    <Fragment>
      <div>
        <h3 id="tabs">{`<Tabs />`}</h3>

        <Table content={tabsTable} className="xTable" />

        <p>*Required prop.</p>

        <strong>Tip</strong>: You can target the following CSS heirarchy
        for custom styling: {codeSnippet(".yourClassName .tabNames .name {}")}.
        Your custom <i>className</i> will apply to the tabs container by default.

        <p />
      </div>

      <SampleBox name="Tabs" code={tabsCode}>
        <Tabs content={content} />
      </SampleBox>
    </Fragment>
  );
};

export default SectionTabs;