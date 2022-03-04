import React, { Fragment } from "react";
import { tooltipCode } from './codeSamples';
import { tooltipTable } from './tables';
import { buildRows } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Tooltip from 'components/Tooltip/Tooltip';
import colors from 'theme/colors.scss';

const SectionTooltip = props => {
  return (
    <Fragment>
      <div>
        <h3 id="tooltip">{`<Tooltip />`}</h3>

        <Table content={tooltipTable} className="xTable" />

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName .tip {}", false, "css")}<br />
        {codeSnippet(".yourClassName i {}", false, "css")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Tooltip />")} container by default.
        <p />
      </div>

      <SampleBox name="Tooltip" code={tooltipCode}>
        <div className="column">
          <div className="inline">
            Standard&nbsp;
            <Tooltip text="Standard tool tip." />
          </div>

          <div className="inline">
            Child&nbsp;
            <Tooltip position="top">
              <i className="fa-solid fa-smile" />&nbsp;
              Tool tip rendering children.
            </Tooltip>
          </div>
        </div>
      </SampleBox>
    </Fragment>
  );
};

export default SectionTooltip;