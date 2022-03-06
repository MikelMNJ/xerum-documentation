import React, { Fragment } from "react";
import { toTopCode } from './codeSamples';
import { toTopTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import ToTop from 'components/ToTop/ToTop';
import colors from 'theme/colors.scss';

const sampleTop = {
  position: "relative",
};

const SectionToTop = props => {
  return (
    <Fragment>
      <div>
        <h3 id="to-top">{`<ToTop />`}</h3>

        <Table content={toTopTable} className="xTable" columnLayout={columnLayout} />

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName i {}", false, "css")}<br />

        <p />

        Your custom <i>className</i> will apply to the&nbsp;
        {codeSnippet("<ToTop />")} container by default.

        <p />
      </div>

      <SampleBox name="To-Top" code={toTopCode}>
        <div className="inline">
          <ToTop style={sampleTop} icon="fa-solid fa-angles-up" fixed />
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionToTop;