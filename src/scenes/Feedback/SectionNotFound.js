import React, { Fragment } from "react";
import { notFoundCode } from './codeSamples';
import { notFoundTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import NotFound from 'components/NotFound/NotFound';

const SectionNotFound = props => {
  return (
    <Fragment>
      <div>
        <h3 id="not-found">{`<NotFound />`}</h3>

        <Table content={notFoundTable} className="xTable" />

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName h2 {}")}<br />
        {codeSnippet(".yourClassName p {}")}<br />

        <p>
          Your custom <i>className</i> will apply to the not found container by default.
        </p>
      </div>

      <SampleBox name="Not Found" code={notFoundCode}>
        <NotFound />
      </SampleBox>
    </Fragment>
  );
};

export default SectionNotFound;