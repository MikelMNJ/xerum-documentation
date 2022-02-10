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

        <strong>Note</strong>: You can target the {codeSnippet("<h2>")} title and&nbsp;
        {codeSnippet("<p>")} message tags, with a custom <i>className</i> and CSS
        chaining.

        <p />
      </div>

      <SampleBox name="Not Found" code={notFoundCode}>
        <NotFound />

        <NotFound
          className="customNotFound"
          icon="fa-solid fa-face-frown-open"
          title="Well, shucks!"
          message="Something's missing."
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionNotFound;