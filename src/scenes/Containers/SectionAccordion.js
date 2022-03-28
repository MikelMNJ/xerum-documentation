import React, { Fragment } from 'react';
import { accordionCode } from './codeSamples';
import { accordionTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Accordion from 'components/Accordion/Accordion';
import Table from 'components/Table/Table';

const sections = [
  {
    title: "First section",
    content: "Section 1 content",
  },
  {
    title: "Second section",
    content: "Section 2 content",
  },
  {
    title: "Third section",
    content: "Section 3 content",
  },
];

const SectionAccordion = props => {
  return (
    <Fragment>
      <div>
        <h2 id="accordion">Containers</h2>
        <h3>{`<Accordion />`}</h3>

        <Table content={accordionTable} className="xTable" columnLayout={columnLayout} />

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName .section {}", false, "css")}<br />
        {codeSnippet(".yourClassName .section .title {}", false, "css")}<br />
        {codeSnippet(".yourClassName .section .title:hover {}", false, "css")}<br />
        {codeSnippet(".yourClassName .section .title.active {}", false, "css")}<br />
        {codeSnippet(".yourClassName .section .title.active:hover {}", false, "css")}<br />
        {codeSnippet(".yourClassName .section .title i {}", false, "css")}<br />
        {codeSnippet(".yourClassName .section .content {}", false, "css")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Accordion />")} container by default.
        <p />
      </div>

      <SampleBox name="Accordion" code={accordionCode}>
        <Accordion
          className="test"
          sections={sections}
          openDefault={sections[0]}
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionAccordion;