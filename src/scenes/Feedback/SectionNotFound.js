import React, { Fragment } from "react";
import { notFoundCode } from './codeSamples';
import { notFoundTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import NotFound from 'components/NotFound/NotFound';

const SectionNotFound = props => {
  return (
    <Fragment>
      <div>
        <h3 id="not-found">{`<NotFound />`}</h3>

        <Table content={notFoundTable} className="xTable" columnLayout={columnLayout} />

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName h2 {}", false, "css")}<br />
        {codeSnippet(".yourClassName p {}", false, "css")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<NotFound />")} container by default.
        <p />
      </div>

      <SampleBox name="Not Found" code={notFoundCode}>
        <NotFound />
      </SampleBox>
    </Fragment>
  );
};

export default SectionNotFound;