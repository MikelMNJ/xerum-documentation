import React, { Fragment } from "react";
import { toggleCode } from './codeSamples';
import { toggleTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Toggle from 'components/Toggle/Toggle';
import colors from 'theme/colors.scss';

const SectionToggle = props => {
  return (
    <Fragment>
      <div>
        <h3 id="toggle">{`<Toggle />`}</h3>

        <Table content={toggleTable} className="xTable" columnLayout={columnLayout} />

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName input {}", false, "css")}<br />
        {codeSnippet(".yourClassName .toggleTrack {}", false, "css")}<br />
        {codeSnippet(".yourClassName .toggleTrack i {}", false, "css")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Toggle />")} container by default.
        <p />
      </div>

      <SampleBox name="Toggle" code={toggleCode}>
        <strong>
          <Toggle />
        </strong>
      </SampleBox>
    </Fragment>
  );
};

export default SectionToggle;